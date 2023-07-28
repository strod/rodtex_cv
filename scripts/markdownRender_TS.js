const TermsOfServiceText = `
# Terms of Service for rod_ttk_api_conector

Effective Date: [2023-07-18]

Welcome to rod_ttk_api_conector! These Terms of Service ("Terms") govern your use of the rod_ttk_api_conector application ("Application") and its interaction with the TikTok API and other TikTok Developer Services. By using the Application, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the Application.

## 1. License and Use of TikTok Developer Services

1.1. License: You are granted a limited, non-exclusive, non-transferable, and revocable license to use the TikTok Developer Services through the Application for your personal, non-commercial use only.

1.2. TikTok Information: Any TikTok Information obtained through the Application must be used exclusively within the Application for your personal, non-commercial purposes.

## 2. Compliance and Restrictions

2.1. Reasonable Use: You must comply with all applicable laws, rules, and regulations when using the Application and the TikTok Developer Services. Ensure you review and adhere to TikTok's requirements, policies, and guidelines.

2.2. General Restrictions: When using the Application and TikTok Developer Services, you agree not to:

- Violate any intellectual property rights, laws, regulations, or policies applicable to the TikTok Developer Services or TikTok Services.
- Use the TikTok Developer Services for any commercial or unauthorized purpose, including spamming, advertisements, or solicitation without TikTok's express written consent.
- Introduce harmful content, viruses, malware, or engage in any unauthorized activities through the Application or TikTok Developer Services.

2.3. Compliance Audit: TikTok may audit your compliance with these Terms. You agree to cooperate and provide any necessary information to demonstrate your compliance.

## 3. Data Protection

3.1. Privacy: Your use of the Application and TikTok Developer Services is subject to the privacy practices and policies outlined in the Application's privacy policy.

## 4. Termination

4.1. Termination: TikTok reserves the right to terminate or suspend your access to the Application and TikTok Developer Services at any time and for any reason without prior notice.

## 5. Contact and Support

For any questions, support, or inquiries regarding the rod_ttk_api_conector Application, please contact:
Email: rodstex@gmail.com

## 6. Modifications to the Terms

We may update or modify these Terms from time to time, and any changes will be effective upon posting. It is your responsibility to review these Terms regularly for any updates. By continuing to use the Application after any modifications to the Terms, you agree to be bound by the revised Terms.

## 7. Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflicts of law principles.

## 8. Entire Agreement

These Terms constitute the entire agreement between you and the rod_ttk_api_conector Application regarding your use of the TikTok Developer Services and the Application and supersede any prior agreements or communications.

By using the rod_ttk_api_conector Application, you acknowledge that you have read, understood, and agreed to these Terms.

[Rodrigo Teixeira]
[São Paulo, SP, Brazil]
`;
// Get the target element
const mdContentTermsOfService = document.getElementById('TermsOfServiceMD');
// Convert Markdown to HTML and insert it into the target element
mdContentTermsOfService.innerHTML = marked(TermsOfServiceText);