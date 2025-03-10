# Uber Eats Clone 

This project contains an example of the Uber Eats clone application, built with React Native and Expo.

## Features

-   **Deals (Offer/Rewards) Screen:** Implemented a "Come back later for new deals" section with illustrations, badge text customization, and a secondary list of offers.
-   **Components:** Contains custom SVG images as well as CustomText view.
-   **Conditional Badge Display:** Badge banners are now displayed only when `badgeText` is provided in the offer data.
-   **Floating Heart Button:** Added a floating heart button over card images.
-   **Sample Verification UI:** Users will have mocked UI flow that does visually represent how real onboarding flow should work.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/dinoomanovic/uber-eats
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd uber-eats
    ```

3.  **Install dependencies:**

    ```bash
    npm install  # or yarn install
    ```

4.  **Install Expo CLI globally (if you haven't already):**

    ```bash
    npm install -g expo-cli  # or yarn global add expo-cli
    ```

## How to Launch the App

1.  **Start the Expo development server:**

    ```bash
    npx expo start or npx expo run:android
    ```

2.  **Choose how to run the app:**

    * **Expo Go App (Recommended for quick testing):**
        * Download the Expo Go app from the App Store (iOS) or Google Play Store (Android).
        * Scan the QR code displayed in your terminal or browser using the Expo Go app.
    * **Emulator/Simulator:**
        * If you have an iOS simulator or Android emulator set up, press `i` (iOS) or `a` (Android) in the terminal after starting the Expo development server.

## How to Navigate to the Deals Screen

1.  **Welcome Screen:**
    * Upon launching the app, you will be presented with a Welcome Screen.
    * To proceed, you will need to input a valid phone number with a minimum of 10 digits which is given as a hint.
    * After that you will automatically proceed to next screen.
  
2. **Phone Input Screen:**
    * Either press Next or.
    * Press Continue with Google button.
    * After that you will proceed to next screen.
3. **Password Input Screen:**
    * Password input can be tested by tapping and inputing characters, also password can be revealed on eye icon.
    * After at least one character is typed Next button will be enabled, also user can skip this process with other two buttons.
    * Back button leads to previous screen.
4. **Password Input Screen:**
    * Password input can be tested by tapping and inputing characters, also password can be revealed on eye icon.
    * After at least one character is typed Next button will be enabled, also user can skip this process with other two buttons.
    * Back button leads to previous screen.
5. **Phone verification Screen:**
    * Phone verification code can be tested by tapping on one of boxes and inputing characters.
    * After at least one character is typed Next button will be enabled, also user can skip this process with other two buttons.
    * There is also I haven't received a code button with timer that counts 9 seconds before becoming enabled.
    * Back button leads to previous screen.
6. **Email verification Screen:**
* Email verification code can be tested by tapping on one of boxes and inputing characters.
    * After at least one character is typed Next button will be enabled, also user can skip this process with other button.
    * Back button leads to previous screen.
7. **All set Screen:**
* Continue button leads to home screen.
8. **Home Screen:**
  * Contains categories, however tapping on Search opens Searches screen.
    * Only implemented screens per design are Browse and Account tab, other tabs have screens with placeholders.
9. **Search Screen:**
 * Tapping on any of search results will open Deals screen
 * Tapping back on search bar leads back to Home screen.
10. **Accounts Screen:**
  * Contains user profile picture and name along with some account settings.
11.  **Deals Screen:**
  * Contains two tabs Offers and Rewards
  * Offers have some extra features like scrollable pills view and badge header text.
  * Both screens have sample floating heart icon in top right corner.
  * Back button leads to Search results screen.

![App Screenshot](https://i.imgur.com/x7HTyXI.png)
