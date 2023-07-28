const PrivacyPolicyText = `
# Privacy Policy

This Privacy Policy explains how the app collects, uses, and discloses personal information when you use the TikTok app ("App").

##### 1. Information We Collect

###### 1.1 Personal Information

We may collect the following types of personal information from you:

- Contact Information: Such as your name, email address, phone number, or other similar contact details.
- Usage Information: Such as your IP address, device information, log data, and analytics regarding your use of the App.
- User Content: Any personal information that you provide in the content you submit or upload on the App.

###### 1.2 Cookies and Tracking Technologies

We may use cookies and similar tracking technologies to enhance your experience and collect information about your usage of the App. These technologies help us analyze trends, administer the App, track users' movements, and gather demographic information.

##### 2. How We Use Your Information

We may use the collected information for the following purposes:

- To provide and maintain the App.
- To personalize your experience and improve the App's features and functionality.
- To respond to your inquiries, comments, or feedback.
- To send you promotional or marketing communications (with your consent).
- To detect, prevent, and address technical issues, security breaches, or illegal activities.

##### 3. Information Sharing and Disclosure

We may share your personal information in the following circumstances:

- With your Consent: We may share your information when you provide us with your explicit consent.
- Service Providers: We may engage trusted third-party service providers to assist us in operating, analyzing, and improving the App. These service providers will have access to your information solely for the purpose of performing tasks on our behalf.
- Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities.

##### 4. Data Retention

We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.

##### 5. Security

We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.

##### 6. Children's Privacy

The App is not intended for use by individuals under the age of [age]. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take appropriate steps to remove the information from our systems.

##### 7. Third-Party Links and Services

The App may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of those third parties before providing any personal information.

##### 8. Changes to this Privacy Policy

We reserve the right to update or change this Privacy Policy at any time. Any modifications will be effective immediately upon posting the updated version on the App. Your continued use of the App after the changes have been made constitutes your acceptance of the modified Privacy Policy.

##### 9. Contact Us

If you have any questions, concerns, or suggestions regarding this Privacy Policy, please contact us at rodstex@gmail.com.
`;
// Get the target element
const mdContentPrivacyPolicy = document.getElementById('PrivacyPolicyMD');
// Convert Markdown to HTML and insert it into the target element
mdContentPrivacyPolicy.innerHTML = marked(PrivacyPolicyText);
