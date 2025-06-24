import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";

// Reusable component for each settings card
const SettingsCard = ({ title, logo, children }) => (
    <div className="card">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            {logo && <img src={logo} alt={`${title} logo`} className="h-8 object-contain" />}
        </div>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

// Main Payment Settings Component
const PaymentSettings = () => {
    // A real implementation would fetch these initial values from an API
    const [settings, setSettings] = useState({
        paypal: { status: 'Disable', mode: 'Production', clientId: '', secretKey: '', currency: 'all' },
        stripe: { status: 'Disable', publishableKey: '', secretKey: '', currency: 'all' },
        paystack: { status: 'Disable', publicKey: '', secretKey: '', currency: 'all' },
        flutterwave: { status: 'Disable', publicKey: '', secretKey: '', currency: 'all' },
        mercadopago: { status: 'Disable', apiKey: '', secretKey: '', currency: 'BRL' },
        razorpay: { status: 'Enable', apiKey: 'rzp_live_0fbhYWddFQao5f', secretKey: 'cr66ESOJZtoNF2dFQ2R0sFFa', currency: 'INR' },
        midtrans: { status: 'Disable', mode: 'Production', apiKey: '', serverKey: '', currency: 'IDR' },
        iyzico: { status: 'Disable', mode: 'Production', apiKey: '', secretKey: '', currency: 'TRY' },
        bankTransfer: { status: 'Disable', details: '<p></p>' },
        cod: { status: 'Enable' },
    });

    const handleInputChange = (gateway, field, value) => {
        setSettings(prev => ({
            ...prev,
            [gateway]: {
                ...prev[gateway],
                [field]: value,
            },
        }));
    };
    
    // Logos as data URLs to keep the component self-contained
    const logos = {
        paypal: "https://qa.toyfort.in/assets/img/payment/paypal.svg",
        stripe: "https://qa.toyfort.in/assets/img/payment/stripe.svg",
        paystack: "https://qa.toyfort.in/assets/img/payment/paystack.svg",
        flutterwave: "https://qa.toyfort.in/assets/img/payment/flutterwave.svg",
        mercadopago: "https://qa.toyfort.in/assets/img/payment/midtrans.svg",
        razorpay: "https://qa.toyfort.in/assets/img/payment/iyzico.svg",
        midtrans: "https://qa.toyfort.in/assets/img/payment/mercado_pago.svg",
        iyzico: "https://qa.toyfort.in/assets/img/payment/razorpay.svg",
    };

    return (
        <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
        
        <div className="p-6 bg-gray-50">
            <style>{`
                .card { background-color: white; border: 1px solid #e5e7eb; border-radius: 0.5rem; padding: 1.5rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); }
                .form-input, .form-select, .form-textarea { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
                .form-input::placeholder { color: #9ca3af; }
                .btn-primary { padding: 0.5rem 1rem; border-radius: 0.375rem; background-color: #3b82f6; color: white; font-weight: 500; cursor: pointer; transition: background-color 0.2s; border: none; }
                .btn-primary:hover { background-color: #2563eb; }
                .form-label { display: block; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
                .radio-group { display: flex; gap: 1rem; align-items: center; }
                .radio-label { display: inline-flex; align-items: center; cursor: pointer; }
                .warning-box { background-color: #f0f9ff; border: 1px solid #bae6fd; color: #0c4a6e; padding: 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; }
                .warning-box a { color: #0284c7; text-decoration: underline; font-weight: 500; }
                .tiny-editor-container { border: 1px solid #d1d5db; border-radius: 0.375rem; }
                .tiny-editor-toolbar { padding: 0.5rem; background-color: #f9fafb; border-bottom: 1px solid #d1d5db; color: #4b5563; font-weight: bold; }
                .tiny-editor-footer { padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #6b7280; text-align: right; }
            `}</style>

            <h1 className="text-2xl font-bold text-gray-900 mb-6">Payment Settings</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* PayPal */}
                <SettingsCard title="PayPal" logo={logos.paypal}>
                    <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="paypalStatus" value="Enable" checked={settings.paypal.status === 'Enable'} onChange={e => handleInputChange('paypal', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="paypalStatus" value="Disable" checked={settings.paypal.status === 'Disable'} onChange={e => handleInputChange('paypal', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div className="radio-group"><span className="form-label">Mode</span>
                        <label className="radio-label"><input type="radio" name="paypalMode" value="Production" checked={settings.paypal.mode === 'Production'} onChange={e => handleInputChange('paypal', 'mode', e.target.value)} /> <span className="ml-2">Production</span></label>
                        <label className="radio-label"><input type="radio" name="paypalMode" value="Sandbox" checked={settings.paypal.mode === 'Sandbox'} onChange={e => handleInputChange('paypal', 'mode', e.target.value)} /> <span className="ml-2">Sandbox</span></label>
                    </div>
                    <div><label className="form-label">Client ID</label><input type="text" className="form-input" placeholder="Client ID" value={settings.paypal.clientId} onChange={e => handleInputChange('paypal', 'clientId', e.target.value)} /></div>
                    <div><label className="form-label">Secret Key</label><input type="text" className="form-input" placeholder="Secret Key" value={settings.paypal.secretKey} onChange={e => handleInputChange('paypal', 'secretKey', e.target.value)} /></div>
                    <div><label className="form-label">Base Currency</label><select className="form-select" value={settings.paypal.currency} onChange={e => handleInputChange('paypal', 'currency', e.target.value)}><option value="all">All active currencies</option></select></div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>

                {/* Stripe */}
                <SettingsCard title="Stripe" logo={logos.stripe}>
                    <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="stripeStatus" value="Enable" checked={settings.stripe.status === 'Enable'} onChange={e => handleInputChange('stripe', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="stripeStatus" value="Disable" checked={settings.stripe.status === 'Disable'} onChange={e => handleInputChange('stripe', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div><label className="form-label">Publishable Key</label><input type="text" className="form-input" placeholder="Publishable Key" value={settings.stripe.publishableKey} onChange={e => handleInputChange('stripe', 'publishableKey', e.target.value)} /></div>
                    <div><label className="form-label">Secret Key</label><input type="text" className="form-input" placeholder="Secret Key" value={settings.stripe.secretKey} onChange={e => handleInputChange('stripe', 'secretKey', e.target.value)} /></div>
                    <div><label className="form-label">Base Currency</label><select className="form-select" value={settings.stripe.currency} onChange={e => handleInputChange('stripe', 'currency', e.target.value)}><option value="all">All active currencies</option></select></div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>

                {/* Paystack */}
                <SettingsCard title="Paystack" logo={logos.paystack}>
                    <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="paystackStatus" value="Enable" checked={settings.paystack.status === 'Enable'} onChange={e => handleInputChange('paystack', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="paystackStatus" value="Disable" checked={settings.paystack.status === 'Disable'} onChange={e => handleInputChange('paystack', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div><label className="form-label">Public Key</label><input type="text" className="form-input" placeholder="Public Key" value={settings.paystack.publicKey} onChange={e => handleInputChange('paystack', 'publicKey', e.target.value)} /></div>
                    <div><label className="form-label">Secret Key</label><input type="text" className="form-input" placeholder="Secret Key" value={settings.paystack.secretKey} onChange={e => handleInputChange('paystack', 'secretKey', e.target.value)} /></div>
                    <div><label className="form-label">Base Currency</label><select className="form-select" value={settings.paystack.currency} onChange={e => handleInputChange('paystack', 'currency', e.target.value)}><option value="all">All active currencies</option></select></div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>

                {/* Flutterwave */}
                <SettingsCard title="Flutterwave" logo={logos.flutterwave}>
                    <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="flutterwaveStatus" value="Enable" checked={settings.flutterwave.status === 'Enable'} onChange={e => handleInputChange('flutterwave', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="flutterwaveStatus" value="Disable" checked={settings.flutterwave.status === 'Disable'} onChange={e => handleInputChange('flutterwave', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div><label className="form-label">Public Key</label><input type="text" className="form-input" placeholder="Public Key" value={settings.flutterwave.publicKey} onChange={e => handleInputChange('flutterwave', 'publicKey', e.target.value)} /></div>
                    <div><label className="form-label">Secret Key</label><input type="text" className="form-input" placeholder="Secret Key" value={settings.flutterwave.secretKey} onChange={e => handleInputChange('flutterwave', 'secretKey', e.target.value)} /></div>
                    <div><label className="form-label">Base Currency</label><select className="form-select" value={settings.flutterwave.currency} onChange={e => handleInputChange('flutterwave', 'currency', e.target.value)}><option value="all">All active currencies</option></select></div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>

                {/* Mercado Pago */}
                <SettingsCard title="Mercado Pago" logo={logos.mercadopago}>
                     <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="mercadopagoStatus" value="Enable" checked={settings.mercadopago.status === 'Enable'} onChange={e => handleInputChange('mercadopago', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="mercadopagoStatus" value="Disable" checked={settings.mercadopago.status === 'Disable'} onChange={e => handleInputChange('mercadopago', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div><label className="form-label">Api Key</label><input type="text" className="form-input" placeholder="Api Key" value={settings.mercadopago.apiKey} onChange={e => handleInputChange('mercadopago', 'apiKey', e.target.value)} /></div>
                    <div><label className="form-label">Secret Key (Token)</label><input type="text" className="form-input" placeholder="Secret Key" value={settings.mercadopago.secretKey} onChange={e => handleInputChange('mercadopago', 'secretKey', e.target.value)} /></div>
                    <div><label className="form-label">Base Currency</label><select className="form-select" value={settings.mercadopago.currency} onChange={e => handleInputChange('mercadopago', 'currency', e.target.value)}><option value="BRL">BRL (Brazil Real)</option></select></div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>

                {/* Razorpay */}
                <SettingsCard title="Razorpay" logo={logos.razorpay}>
                    <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="razorpayStatus" value="Enable" checked={settings.razorpay.status === 'Enable'} onChange={e => handleInputChange('razorpay', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="razorpayStatus" value="Disable" checked={settings.razorpay.status === 'Disable'} onChange={e => handleInputChange('razorpay', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div><label className="form-label">Api Key</label><input type="text" className="form-input" value={settings.razorpay.apiKey} onChange={e => handleInputChange('razorpay', 'apiKey', e.target.value)} /></div>
                    <div><label className="form-label">Secret Key</label><input type="text" className="form-input" value={settings.razorpay.secretKey} onChange={e => handleInputChange('razorpay', 'secretKey', e.target.value)} /></div>
                    <div><label className="form-label">Base Currency</label><select className="form-select" value={settings.razorpay.currency} onChange={e => handleInputChange('razorpay', 'currency', e.target.value)}><option value="INR">INR (India Rupee)</option></select></div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>
                
                {/* Midtrans */}
                <SettingsCard title="Midtrans" logo={logos.midtrans}>
                    <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="midtransStatus" value="Enable" checked={settings.midtrans.status === 'Enable'} onChange={e => handleInputChange('midtrans', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="midtransStatus" value="Disable" checked={settings.midtrans.status === 'Disable'} onChange={e => handleInputChange('midtrans', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div className="radio-group"><span className="form-label">Mode</span>
                        <label className="radio-label"><input type="radio" name="midtransMode" value="Production" checked={settings.midtrans.mode === 'Production'} onChange={e => handleInputChange('midtrans', 'mode', e.target.value)} /> <span className="ml-2">Production</span></label>
                        <label className="radio-label"><input type="radio" name="midtransMode" value="Sandbox" checked={settings.midtrans.mode === 'Sandbox'} onChange={e => handleInputChange('midtrans', 'mode', e.target.value)} /> <span className="ml-2">Sandbox</span></label>
                    </div>
                    <div><label className="form-label">Api Key</label><input type="text" className="form-input" placeholder="Api Key" value={settings.midtrans.apiKey} onChange={e => handleInputChange('midtrans', 'apiKey', e.target.value)} /></div>
                    <div><label className="form-label">Server Key</label><input type="text" className="form-input" placeholder="Server Key" value={settings.midtrans.serverKey} onChange={e => handleInputChange('midtrans', 'serverKey', e.target.value)} /></div>
                    <div><label className="form-label">Base Currency</label><select className="form-select" value={settings.midtrans.currency} onChange={e => handleInputChange('midtrans', 'currency', e.target.value)}><option value="IDR">IDR (Indonesia Rupiah)</option></select></div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>

                {/* Iyzico */}
                <SettingsCard title="Iyzico" logo={logos.iyzico}>
                    <div className="warning-box">
                        <strong>Warning!</strong> This is the "Checkout Form" integration, not the "Marketplace" integration. <a href="#">Iyzico Checkout Form</a>
                    </div>
                    <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="iyzicoStatus" value="Enable" checked={settings.iyzico.status === 'Enable'} onChange={e => handleInputChange('iyzico', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="iyzicoStatus" value="Disable" checked={settings.iyzico.status === 'Disable'} onChange={e => handleInputChange('iyzico', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div className="radio-group"><span className="form-label">Mode</span>
                        <label className="radio-label"><input type="radio" name="iyzicoMode" value="Production" checked={settings.iyzico.mode === 'Production'} onChange={e => handleInputChange('iyzico', 'mode', e.target.value)} /> <span className="ml-2">Production</span></label>
                        <label className="radio-label"><input type="radio" name="iyzicoMode" value="Sandbox" checked={settings.iyzico.mode === 'Sandbox'} onChange={e => handleInputChange('iyzico', 'mode', e.target.value)} /> <span className="ml-2">Sandbox</span></label>
                    </div>
                    <div><label className="form-label">Api Key</label><input type="text" className="form-input" placeholder="Api Key" value={settings.iyzico.apiKey} onChange={e => handleInputChange('iyzico', 'apiKey', e.target.value)} /></div>
                    <div><label className="form-label">Secret Key</label><input type="text" className="form-input" placeholder="Secret Key" value={settings.iyzico.secretKey} onChange={e => handleInputChange('iyzico', 'secretKey', e.target.value)} /></div>
                    <div><label className="form-label">Base Currency</label><select className="form-select" value={settings.iyzico.currency} onChange={e => handleInputChange('iyzico', 'currency', e.target.value)}><option value="TRY">TRY (Turkish Lira)</option></select></div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>
                
                {/* Bank Transfer */}
                <SettingsCard title="Bank Transfer">
                    <p className="text-sm text-gray-500 -mt-3">Make your payment directly into our bank account.</p>
                     <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="bankTransferStatus" value="Enable" checked={settings.bankTransfer.status === 'Enable'} onChange={e => handleInputChange('bankTransfer', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="bankTransferStatus" value="Disable" checked={settings.bankTransfer.status === 'Disable'} onChange={e => handleInputChange('bankTransfer', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div>
                        <label className="form-label">Bank Accounts</label>
                        {/* Placeholder for a rich text editor like TinyMCE */}
                        <div className="tiny-editor-container">
                             <div className="tiny-editor-toolbar">
                                &#x2630; &lt;/&gt; &lt; &gt; &#x21A9; &#x21AA; <span className="mx-2">B</span> <i className="mx-2">I</i> <u className="mx-2">U</u> <s className="mx-2">S</s> ...
                            </div>
                            <textarea
                                className="form-textarea w-full"
                                rows="8"
                                value={settings.bankTransfer.details}
                                onChange={e => handleInputChange('bankTransfer', 'details', e.target.value)}
                            ></textarea>
                            <div className="tiny-editor-footer">
                                <span>p</span>
                                <span className="ml-4">tiny</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>

                {/* Cash on Delivery */}
                <SettingsCard title="Cash on Delivery">
                    <p className="text-sm text-gray-500 -mt-3">Pay with cash upon delivery.</p>
                     <div className="radio-group"><span className="form-label">Status</span>
                        <label className="radio-label"><input type="radio" name="codStatus" value="Enable" checked={settings.cod.status === 'Enable'} onChange={e => handleInputChange('cod', 'status', e.target.value)} /> <span className="ml-2">Enable</span></label>
                        <label className="radio-label"><input type="radio" name="codStatus" value="Disable" checked={settings.cod.status === 'Disable'} onChange={e => handleInputChange('cod', 'status', e.target.value)} /> <span className="ml-2">Disable</span></label>
                    </div>
                    <div className="text-right pt-4"><button className="btn-primary">Save Changes</button></div>
                </SettingsCard>

            </div>
        </div>
        <Adminfooter />
      
    </div>
    );
};

export default PaymentSettings;