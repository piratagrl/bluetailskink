Here is a comprehensive, production-ready `README.md` tailored specifically for this project:

``` markdown
# Autonomous Driving Vehicle (ADV) Event Reporting Incident (ERI) Description Writer

**Current Version:** v10  
**Primary Maintainer:** Brittany Reath (`reathb@google.com`)  
**Platform:** Google Sheets & Google Apps Script  
**Integration Targets:** Salesforce Service Cloud / Lightning (`lightning.force.com`), Contact Center Player (`contactcenter.corp.google.com`), Internal Safety & Ticketing Systems

---

## 📌 Overview

The **ERI Description Writer** is a standardized, operational incident logging tool used by Fleet Operations, Event Response Teams (ERT), and Safety Dispatchers. It streamlines the intake of real-time telemetry, human-in-the-loop interactions, and operational outcomes during autonomous driving vehicle anomalies, minor contacts, or safety events.

By combining structured multi-choice dropdowns with targeted free-text observations, the tool dynamically concatenates inputs into clean, standardized narrative summaries and formatted key-value blocks ready for paste-and-file incident tickets.

---

## 🚀 Key Features

- **Standardized Incident Taxonomy:** Enforces consistent terminology for road actors (VRU, ORU, Ped, LEO/FR), vehicle dynamics, and recovery actions.
- **Dynamic Narrative Generation:** Automatically synthesizes disparate form inputs into a cohesive, chronological incident summary paragraph.
- **Ticketing & Case Integration:** Provides dedicated fields for Salesforce Case IDs, Contact Center audio call recordings, and trip identifiers.
- **Executive & Metric Summary:** Generates an instant boolean checklist (e.g., trip waived, credits issued, roadside assistance required, TOS violations) for downstream reporting.
- **Workflow Automation (Apps Script):**
  - **Copy ERI to Clipboard:** Quick one-click action to copy formatted incident descriptions into external ticketing software.
  - **Clear Form:** Resets dropdowns to defaults (`*`) and clears free-text cells between incidents.
  - **Clear Trip Number Only:** Allows rapid re-logging under a shared vehicle or shift session without resetting baseline fields.
- **Regulatory Alignment:** Incorporates regional reporting standards (such as California compliance rules for emergency service logging).

---

## 🗂 Form Structure & Color-Coded Taxonomy

The intake form follows a 5-stage lifecycle framework:

| Section | Color Code | Scope & Description |
| :--- | :--- | :--- |
| **0. Location** | Neutral | Street address or exact geographic location of the event. |
| **1. Context & Baseline** | 🟧 **Orange** | Vehicle state prior to event (speed, lane position, heading), rider presence, external trigger/actor, vehicle response, point of physical contact, and initial post-incident status. |
| **2. Agent & Emergency** | 🟩 **Green** | Field interactions: LEO contact, 911 dispatch status/reasons, ERT-suggested maneuvers, remote/safety holds, insurance exchange, and third-party behavior. |
| **3. Rider Experience** | 🟪 **Pink** | Rider injuries, passenger sentiment/actions requested, trip conclusion/cancellation, and customer concessions (refunds, credits, promo codes). |
| **4. Conclusion & Damage** | 🟨 **Yellow** | Final ADV disposition (RTB Auto/Manual/Tow, mission continuation), physical damage classification (blocking vs. non-blocking vs. zero), and safety escalation flags. |
| **5. Follow-Up & Records** | 🟪 **Purple** | Third-party identifiers (license plate/state), airport/special jurisdiction contact (AZ DPS/Sky Harbor), call audio URLs, Case URLs, and Terms of Service (TOS) violations. |

---

## 📋 Input Field Reference

### Dropdown Fields (Standardized Inputs)
- **Field 1:** Rider presence (`There were riders present`, `There were no riders present`, etc.)
- **Field 2:** Phase of trip (`at pickup`, `on the rider's trip`, `at dropoff`, `free driving`, etc.)
- **Field 3a–3c:** Baseline Speed (`0-3 MPH` to `46+ MPH`), Lane Position, Direction
- **Field 4a:** External trigger actor (`Ped`, `ORU`, `VRU`, `LEO/FR`, `ADV`, `Object`, etc.)
- **Field 6:** Physical contact point (`Left`, `Right`, `Front`, `Back`, `Top`, `Undercarriage`, `No contact`, etc.)
- **Field 7:** Immediate ADV status (`WRA dispatched`, `Tow required`, `Returned to normal`, etc.)
- **Field 8:** LEO contact status
- **Field 9:** 911 initiation status
- **Field 10:** ERT manual maneuver suggestion
- **Field 11:** Safety / remote hold status
- **Field 12:** Insurance exchange verification
- **Field 13:** Third-party post-incident movement
- **Field 14–15:** Rider and ORU/VRU injury classifications
- **Field 16:** Rider safety requests (multiselect)
- **Field 17:** Trip completion status
- **Field 18:** Financial accommodations / promos applied
- **Field 19:** Final ADV resolution (`RTB in Manual`, `RTB in Auto`, `Tow`, `Continued mission`, etc.)
- **Field 20:** Damage classification (`Zero damage`, `Non-blocking`, `Blocking`, `TBD`)
- **Field 21:** Safety/Operations escalation flag
- **Field 22:** Special airport / DPS dispatch flag
- **Field 23a:** ORU License Plate State (US 50 states + `UNKNOWN` / `N/A`)
- **Field 24c:** TOS violation flag (`Yes` / `No`)

### Free-Text / URL Fields
- **Field 0:** Exact incident address
- **Field 4b:** External party action narrative ("What did they do?")
- **Field 5:** ADV dynamic reaction narrative ("This caused the ADV to...")
- **Field 9a:** Reason for 911 dispatch (if applicable)
- **Field 20a:** Specific damage description (if applicable)
- **Field 23:** ORU License Plate number
- **Field 24a:** Call recording link
- **Field 24b:** Internal Case notes link

---

## 🛠 Usage Instructions

1. **Create an Individual Copy:**
   - Go to `File > Make a copy`. 
   - *Do not edit the master template directly.*
2. **Fill Out the Incident Sequentially:**
   - Work top-to-bottom through Orange ➔ Green ➔ Pink ➔ Yellow ➔ Purple.
   - For any question that does not apply, leave it as default or select `N/A`.
3. **Verify the Continuity Block:**
   - Review row 70+ to verify that the concatenated text flows logically and accurately reflects the incident.
4. **Copy Output:**
   - Click the **"COPY MY ERI TO CLIPBOARD"** UI button.
   - Paste the block into the target Salesforce Case description, Buganizer issue, or dispatch handoff ticket.
5. **Reset for Next Case:**
   - Click **"CLEAR FORM"** to reset all fields back to blank defaults.

---

## 📜 Version History & Changelog

- **v10 (Current):**
  - Updated field labels and refined dropdown options for clarity.
  - Added warning banner reminders for user workflow hygiene (`Make a copy`).
- **v7–v9:**
  - Standardized regulatory phrasing (aligned 911 wording with California DMV / CPUC reporting expectations).
  - Enhanced error handling on multi-select rider action arrays.
- **v4–v6:**
  - Integrated interactive Apps Script action buttons (`Clear Form`, `Copy to Clipboard`, `Clear Trip Number`).
  - Added preview tables and boolean validation summaries.
- **v1–v3:**
  - Initial taxonomy design, color-coding framework, and formula-driven narrative string builder.

---

## 🔒 Access & Compliance Notes

- **Confidentiality:** This sheet processes operational and potentially identifiable incident information (PII/vehicle data). Ensure proper Google Workspace permission levels (`Restricted / Specific Domain Access`).
- **Data Integrity:** Do not unhide or manually edit formula columns on `Sheet2` unless releasing an approved system update.

```
