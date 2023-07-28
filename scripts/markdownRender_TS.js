const TermsOfServiceText = `
# Terms of Service

These Terms of Service ("Terms") govern your access to and use of the TikTok app ("App") provided by RodTex_TikTokAPI ("we," "us," or "our"). By using the App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should not use the App.

##### 1. Eligibility

1.1 Age Requirement: There are no age restrictions for using the App. By using the App, you represent and warrant that you are capable of entering into a binding contract with us and meet all eligibility requirements.

1.2 Compliance: You agree to comply with all applicable laws, regulations, and third-party agreements while using the App.

##### 2. User Accounts

2.1 Account Creation: To use certain features of the App, you may need to create a user account. You are responsible for providing accurate and complete information during the registration process and keeping your account credentials secure.

2.2 Account Usage: You are solely responsible for any activity that occurs under your account. You must notify us immediately of any unauthorized use or security breaches.

2.3 Account Termination: We reserve the right to suspend, terminate, or disable your account, without prior notice, for any violation of these Terms or any other reason at our sole discretion.

##### 3. Content

3.1 User Content: The App allows you to post, upload, and share content, including but not limited to text, images, videos, and audio ("User Content"). You retain ownership of your User Content, but by submitting it on the App, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, adapt, publish, and distribute your User Content for the purpose of operating and promoting the App.

3.2 Prohibited Content: You agree not to post or share any content that is illegal, infringes upon intellectual property rights, violates privacy or publicity rights, or contains harmful or offensive material. We reserve the right to remove any content that violates these Terms or is otherwise objectionable.

3.3 Intellectual Property: The App and its original content (excluding User Content) are protected by intellectual property rights owned by us or our licensors. You agree not to modify, distribute, reproduce, or create derivative works based on the App without our prior written consent.

##### 4. Privacy

4.1 Data Collection: We collect and process personal information in accordance with our Privacy Policy. By using the App, you consent to our collection, use, and sharing of personal information as described in the Privacy Policy.

4.2 Cookies and Tracking Technologies: We may use cookies and similar tracking technologies to enhance your experience and collect information about your usage of the App. You can manage your preferences related to cookies through your device or browser settings.

##### 5. Disclaimer of Warranties

The App is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that the App will be uninterrupted, error-free, or free from viruses or other harmful components. Your use of the App is at your own risk.

##### 6. Limitation of Liability

To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App, even if we have been advised of the possibility of such damages.

##### 7. Governing Law and Dispute Resolution

These Terms shall be governed by and construed in accordance with the laws of [Your Country/Jurisdiction]. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your City/Jurisdiction].

##### 8. Modifications to the Terms

We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting the revised Terms on the App. Your continued use of the App after the changes have been made constitutes your acceptance of the modified Terms.
`;
// Get the target element
const mdContentTermsOfService = document.getElementById('TermsOfServiceMD');
// Convert Markdown to HTML and insert it into the target element
mdContentTermsOfService.innerHTML = marked(TermsOfServiceText);