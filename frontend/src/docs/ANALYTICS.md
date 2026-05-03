# Analytics Architecture

Election Saathi employs a robust, serverless analytics pipeline designed to track civic engagement, language preferences, and user interactions.

## Data Flow Architecture

Our analytics stack leverages Google Cloud services to capture and warehouse events:

1. **Frontend Events (React)**
   The React application uses an analytics utility (`src/utils/analytics.ts`) to capture key interactions.

2. **Google Analytics 4 (GA4)**
   Events are pushed to the GA4 dataLayer. GA4 handles sessionization, deduplication, and real-time dashboarding.

3. **BigQuery Export (GCP)**
   GA4 is linked to a Google Cloud Project with the BigQuery export integration enabled. 
   - A daily export streams the raw event data into BigQuery (`events_*` tables).
   - This allows SQL-based analysis of the civic data without GA4's UI limitations.

## Tracked Events

| Event Name | Parameters | Purpose |
| :--- | :--- | :--- |
| `message_sent` | `message_length`, `language` | Tracks engagement volume and prompt complexity. |
| `chip_clicked` | `chip_text` | Identifies which suggested topics voters care about most. |
| `language_changed` | `language` | Tracks demographic usage across India's regional languages. |
| `copy_message` | None | Measures how often users find answers valuable enough to save/share. |

## Future BigQuery Use Cases

With raw event data flowing into BigQuery, we can perform advanced analysis:
- **Demographic Insights:** Correlating language selection with specific civic queries.
- **Sentiment & Topic Trends:** Identifying trending election topics in specific weeks leading up to polling phases.
- **Drop-off Analysis:** Measuring the exact sequence of questions users ask before leaving the app.
