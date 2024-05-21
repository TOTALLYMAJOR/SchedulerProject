# Salesforce Scheduler LWC

![Scheduler](https://github.com/TOTALLYMAJOR/SchedulerProject/assets/7169661/2bca4c60-8d96-4184-85e0-0299bb69713d)


## Overview

The Salesforce Scheduler Lightning Web Component (LWC) allows users to view and book available time slots for appointments. This component is designed to provide a user-friendly interface for scheduling, complete with error handling, loading spinners, and success messages.

## Features

- **Loading Spinner**: Indicates data fetching process.
- **Error Handling**: Displays errors if operations fail.
- **Success Message**: Confirms successful booking.
- **Enhanced UI**: Better button layout for a more intuitive interface.

## Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd SchedulerProject
    ```

2. **Authorize your Salesforce org**:
    ```bash
    sfdx force:auth:web:login -d -a MyDevHub
    ```

3. **Deploy the component to your org**:
    ```bash
    sfdx force:source:deploy -p force-app
    ```

4. **Open your Salesforce org**:
    ```bash
    sfdx force:org:open
    ```

## Usage

1. Navigate to the App Builder in Salesforce.
2. Drag and drop the Scheduler component onto the desired page.
3. Save and activate the page.

