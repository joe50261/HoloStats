mod channels;
mod chat;
mod metadata;
mod pubsub;
mod rss;
mod streams;
mod thumbnail;
mod upload;

use chrono::{Timelike, Utc};
use holostats_config::CONFIG;
use reqwest::Client;

pub use channels::*;
pub use chat::*;
pub use streams::*;

#[derive(Clone)]
pub struct RequestHub {
    client: Client,
}

impl RequestHub {
    pub fn new() -> Self {
        RequestHub {
            client: Client::new(),
        }
    }

    pub fn youtube_api_key(&self) -> &str {
        let len = CONFIG.youtube.api_keys.len();
        let idx = (Utc::now().hour() as usize) % len;
        &CONFIG.youtube.api_keys[idx]
    }
}

impl Default for RequestHub {
    fn default() -> Self {
        RequestHub::new()
    }
}

pub use reqwest::Error as RequestError;
