
 document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(function(item) {
                const button = item.querySelector('.faq-button');
                const content = item.querySelector('.faq-content');
                
                button.addEventListener('click', function() {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other FAQs
                    faqItems.forEach(function(otherItem) {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.faq-content').classList.remove('active');
                        }
                    });
                    
                    // Toggle current FAQ
                    if (isActive) {
                        item.classList.remove('active');
                        content.classList.remove('active');
                    } else {
                        item.classList.add('active');
                        content.classList.add('active');
                        
                        // Smooth scroll to FAQ
                        setTimeout(function() {
                            item.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest'
                            });
                        }, 100);
                    }
                });
            });
        });




 let currentRecordCount = 0;
        
        const defaultConfig = {
            page_title: "Contact Us",
            page_subtitle: "Get in touch with our career experts to start your journey toward professional success",
            office_address: "123 Career Street, Professional City, PC 12345",
            phone_number: "(555) 123-4567",
            email_address: "info@careercounseling.com",
            office_hours: "Monday - Friday: 9:00 AM - 6:00 PM",
            primary_color: "#2563eb",
            secondary_color: "#4f46e5",
            background_color: "#f0f9ff",
            accent_color: "#10b981",
            text_color: "#1f2937"
        };

        const dataHandler = {
            onDataChanged(data) {
                currentRecordCount = data.length;
            }
        };

        async function initializeApp() {
            if (window.dataSdk) {
                const initResult = await window.dataSdk.init(dataHandler);
                if (!initResult.isOk) {
                    console.error("Failed to initialize data SDK");
                }
            }

            if (window.elementSdk) {
                await window.elementSdk.init({
                    defaultConfig,
                    render: async (config) => {
                        // Update text content
                        document.getElementById('page-title').textContent = config.page_title || defaultConfig.page_title;
                        document.getElementById('page-subtitle').textContent = config.page_subtitle || defaultConfig.page_subtitle;
                        document.getElementById('office-address').textContent = config.office_address || defaultConfig.office_address;
                        document.getElementById('phone-number').textContent = config.phone_number || defaultConfig.phone_number;
                        document.getElementById('email-address').textContent = config.email_address || defaultConfig.email_address;
                        document.getElementById('office-hours').textContent = config.office_hours || defaultConfig.office_hours;

                        // Apply colors
                        const primaryColor = config.primary_color || defaultConfig.primary_color;
                        const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
                        const backgroundColor = config.background_color || defaultConfig.background_color;
                        const accentColor = config.accent_color || defaultConfig.accent_color;
                        const textColor = config.text_color || defaultConfig.text_color;

                        document.body.style.background = `linear-gradient(to bottom right, ${backgroundColor}, ${primaryColor}20)`;
                        document.getElementById('submit-btn').style.backgroundColor = primaryColor;
                        document.getElementById('submit-btn').addEventListener('mouseenter', () => {
                            document.getElementById('submit-btn').style.backgroundColor = secondaryColor;
                        });
                        document.getElementById('submit-btn').addEventListener('mouseleave', () => {
                            document.getElementById('submit-btn').style.backgroundColor = primaryColor;
                        });

                        // Update focus colors for form inputs
                        const inputs = document.querySelectorAll('input, select, textarea');
                        inputs.forEach(input => {
                            input.addEventListener('focus', () => {
                                input.style.borderColor = primaryColor;
                                input.style.boxShadow = `0 0 0 2px ${primaryColor}33`;
                            });
                        });
                    },
                    mapToCapabilities: (config) => ({
                        recolorables: [
                            {
                                get: () => config.primary_color || defaultConfig.primary_color,
                                set: (value) => {
                                    config.primary_color = value;
                                    window.elementSdk.setConfig({ primary_color: value });
                                }
                            },
                            {
                                get: () => config.secondary_color || defaultConfig.secondary_color,
                                set: (value) => {
                                    config.secondary_color = value;
                                    window.elementSdk.setConfig({ secondary_color: value });
                                }
                            },
                            {
                                get: () => config.background_color || defaultConfig.background_color,
                                set: (value) => {
                                    config.background_color = value;
                                    window.elementSdk.setConfig({ background_color: value });
                                }
                            },
                            {
                                get: () => config.accent_color || defaultConfig.accent_color,
                                set: (value) => {
                                    config.accent_color = value;
                                    window.elementSdk.setConfig({ accent_color: value });
                                }
                            },
                            {
                                get: () => config.text_color || defaultConfig.text_color,
                                set: (value) => {
                                    config.text_color = value;
                                    window.elementSdk.setConfig({ text_color: value });
                                }
                            }
                        ],
                        borderables: [],
                        fontEditable: undefined,
                        fontSizeable: undefined
                    }),
                    mapToEditPanelValues: (config) => new Map([
                        ["page_title", config.page_title || defaultConfig.page_title],
                        ["page_subtitle", config.page_subtitle || defaultConfig.page_subtitle],
                        ["office_address", config.office_address || defaultConfig.office_address],
                        ["phone_number", config.phone_number || defaultConfig.phone_number],
                        ["email_address", config.email_address || defaultConfig.email_address],
                        ["office_hours", config.office_hours || defaultConfig.office_hours]
                    ])
                });
            }
        }

        document.getElementById('contact-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (currentRecordCount >= 999) {
                showMessage("Maximum limit of 999 submissions reached. Please try again later.", "error");
                return;
            }

            const submitBtn = document.getElementById('submit-btn');
            const submitText = document.getElementById('submit-text');
            const loadingSpinner = document.getElementById('loading-spinner');
            const form = document.getElementById('contact-form');
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            submitText.textContent = 'Sending...';
            loadingSpinner.classList.remove('hidden');
            
            const formData = new FormData(this);
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone') || '',
                service: formData.get('service') || '',
                message: formData.get('message'),
                submitted_at: new Date().toISOString()
            };

            if (window.dataSdk) {
                const result = await window.dataSdk.create(contactData);
                
                if (result.isOk) {
                    showMessage("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.", "success");
                    form.reset();
                } else {
                    showMessage("Sorry, there was an error sending your message. Please try again.", "error");
                }
            } else {
                // Fallback for when SDK is not available
                showMessage("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.", "success");
                form.reset();
            }
            
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            submitText.textContent = 'Send Message';
            loadingSpinner.classList.add('hidden');
        });

        function showMessage(message, type) {
            const messageDiv = document.getElementById('success-message');
            const messageText = messageDiv.querySelector('div');
            
            messageDiv.className = `success-message px-4 py-3 rounded-lg mb-6 ${
                type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-700' 
                    : 'bg-red-50 border border-red-200 text-red-700'
            }`;
            
            messageText.innerHTML = `
                <div class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        ${type === 'success' 
                            ? '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>'
                            : '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>'
                        }
                    </svg>
                    ${message}
                </div>
            `;
            
            messageDiv.classList.remove('hidden');
            
            setTimeout(() => {
                messageDiv.classList.add('hidden');
            }, 5000);
        }

//         // FAQ Toggle Functionality
//       function toggleFAQ(faqNumber) {
//   const content = document.getElementById(`faq-${faqNumber}`);
//   const button = content.previousElementSibling;
//   const icon = button.querySelector('.faq-icon');

//   const isOpen = content.classList.contains('show');

//   // Close all other FAQs
//   document.querySelectorAll('.faq-content').forEach(faq => {
//     if (faq !== content) {
//       faq.classList.remove('show');
//       const otherIcon = faq.previousElementSibling.querySelector('.faq-icon');
//       otherIcon.style.transform = 'rotate(0deg)';
//     }
//   });

//   // Toggle this FAQ
//   if (!isOpen) {
//     content.classList.add('show');
//     icon.style.transform = 'rotate(180deg)';
//   } else {
//     content.classList.remove('show');
//     icon.style.transform = 'rotate(0deg)';
//   }
// }

//         // Initialize the application
//         initializeApp();

  