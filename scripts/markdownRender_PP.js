const PrivacyPolicyText = `
# Privacy Policy for rod_ttk_api_conector

Effective Date: [2023-07-20]

Your privacy is important to us. This Privacy Policy ("Policy") explains how *rod_ttk_api_conector* collects, uses, and protects your personal information in connection with your use of the rod_ttk_api_conector application ("Application") and its interaction with the TikTok API and other TikTok Developer Services. By using the Application, you consent to the collection and use of your personal information as outlined in this Policy. If you do not agree with this Policy, please refrain from using the Application.

## 1. Information We Collect

1.1. TikTok Information: The Application interacts with the TikTok API and collects information made available through the TikTok Developer Services. This may include user data, posts, videos, and other content shared on TikTok. The Application does not collect any TikTok user credentials, passwords, or personal identification information beyond the scope of the TikTok API.

1.2. Usage Data: The Application may collect certain usage data, including but not limited to device information, IP address, app version, and usage patterns, to improve the Application's performance and user experience.

## 2. How We Use Your Information

2.1. Application Usage: We use the TikTok Information collected through the Application to provide you with the features and functionality of the Application, such as displaying TikTok content within the Application.

2.2. Improvements and Analytics: We may use usage data and analytics to improve the performance, features, and user experience of the Application.

## 3. Data Sharing and Disclosure

3.1. TikTok Data: The TikTok Information collected through the Application is used solely within the Application and is not shared or disclosed to any third parties.

3.2. Legal Requirements: We may disclose your information if required to do so by law or in response to valid legal requests.

## 4. Security

4.1. Data Security: We take reasonable measures to protect your information from unauthorized access, loss, misuse, or alteration. However, no data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.

## 5. Children's Privacy

5.1. The Application is not intended for use by individuals under the age of [13 or any other applicable age for data processing consent under relevant privacy laws]. We do not knowingly collect or solicit personal information from individuals under this age. If you believe we have collected personal information from a child under this age, please contact us immediately, and we will promptly delete such information.

## 6. Changes to this Policy

6.1. We may update or modify this Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post any updates on this page, and the revised Policy will be effective upon posting.

## 7. Contact Us

If you have any questions or concerns regarding this Privacy Policy or the Application's privacy practices, please contact us at:

Email: rodstex@gmail.com

[Rodrigo Teixeira]
[São Paulo, SP, Brazil]

By using the rod_ttk_api_conector Application, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
`;
// Get the target element
const mdContentPrivacyPolicy = document.getElementById('PrivacyPolicyMD');
// Convert Markdown to HTML and insert it into the target element
mdContentPrivacyPolicy.innerHTML = marked(PrivacyPolicyText);
