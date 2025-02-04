use anyhow::Result;
use chrono::Utc;
use holostats_config::CONFIG;
use holostats_database::Database;
use holostats_request::RequestHub;
use tracing::{field::Empty, Instrument, Span};

#[tokio::main]
async fn main() -> Result<()> {
    let _guard = holostats_tracing::init("channel_stat", false);

    let fut = async {
        if let Err(err) = real_main().await {
            Span::current().record("otel.status_code", &"ERROR");
            tracing::error!("Failed to fetch channel stats, {:?}", err);
        }
    };

    let span = tracing::info_span!(
        "channel_stat",
        service.name = "holostats-cron",
        span.kind = "consumer",
        otel.status_code = Empty
    );

    fut.instrument(span).await;

    Ok(())
}

async fn real_main() -> Result<()> {
    let hub = RequestHub::new();

    let db = Database::new().await?;

    let now = Utc::now();

    let ids = CONFIG
        .vtubers
        .iter()
        .filter_map(|v| v.bilibili.as_ref())
        .map(|id| id.as_str())
        .collect::<Vec<_>>();

    let channels = hub.bilibili_channels(ids).await?;

    for channel in channels {
        let vtuber_id = match CONFIG.find_by_bilibili_channel_id(&channel.id) {
            Some(vtb) => &vtb.id,
            _ => {
                tracing::warn!("Unkown bilibili channel id {}", channel.id.as_str());
                continue;
            }
        };

        tracing::debug!(
            vtuber_id = vtuber_id.as_str(),
            "Bilibili channel {}, subscriber={} view={}",
            &vtuber_id,
            channel.subscriber_count,
            channel.view_count,
        );

        db.update_bilibili_channel_statistic(
            vtuber_id,
            now,
            channel.view_count,
            channel.subscriber_count,
        )
        .await?;
    }

    let ids = CONFIG
        .vtubers
        .iter()
        .filter_map(|v| v.youtube.as_ref())
        .map(|id| id.as_str())
        .collect::<Vec<_>>();

    let channels = hub.youtube_channels(ids).await?;

    for channel in channels {
        let vtuber_id = match CONFIG.find_by_youtube_channel_id(&channel.id) {
            Some(vtb) => &vtb.id,
            _ => {
                tracing::warn!("Unkown youtube channel id {}", channel.id.as_str());
                continue;
            }
        };

        tracing::debug!(
            vtuber_id = vtuber_id.as_str(),
            "YouTube channel {}, subscriber={} view={}",
            vtuber_id.as_str(),
            channel.subscriber_count,
            channel.view_count,
        );

        db.update_youtube_channel_statistic(
            vtuber_id,
            now,
            channel.view_count,
            channel.subscriber_count,
        )
        .await?;
    }

    Ok(())
}
