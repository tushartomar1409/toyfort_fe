 import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";
const RouteSettings = () => {
  const [routes, setRoutes] = useState({
    'add-coupon': 'add-coupon',
    'add-product': 'add-product',
    'add-shipping-zone': 'add-shipping-zone',
    'admin': 'admin',
    'blog': 'blog',
    'bulk-product-upload': 'bulk-product-upload',
    'cart': 'cart',
    'category': 'category',
    'change-password': 'change-password',
    'comments': 'comments',
    'contact': 'contact',
    'coupons': 'coupons',
    'dashboard': 'dashboard',
    'downloads': 'downloads',
    'earnings': 'earnings',
    'edit-coupon': 'edit-coupon',
    'edit-product': 'edit-product',
    'edit-profile': 'edit-profile',
    'edit-shipping-zone': 'edit-shipping-zone',
    'featured-products': 'featured-products',
    'followers': 'followers',
    'following': 'following',
    'forgot-password': 'forgot-password',
    'help-center': 'help-center',
    'latest-products': 'latest-products',
    'members': 'members',
    'membership-payment-completed': 'membership-payment-completed',
    'messages': 'messages',
    'orders': 'orders',
    'order-completed': 'order-completed',
    'order-details': 'order-details',
    'payment': 'payment',
    'payment-history': 'payment-history',
    'payment-method': 'payment-method',
    'payouts': 'payouts',
    'product': 'product',
    'products': 'products',
    'product-details': 'product-details',
    'profile': 'profile',
    'promote-payment-completed': 'promote-payment-completed',
    'quote-requests': 'quote-requests',
    'refund-requests': 'refund-requests',
    'register': 'register',
    'register-success': 'register-success',
    'reset-password': 'reset-password',
    'reviews': 'reviews',
    'rss-feeds': 'rss-feeds',
    'sale': 'sale',
    'sales': 'sales',
    'search': 'search',
    'select-membership-plan': 'select-membership-plan',
    'seller': 'seller',
    'settings': 'settings',
    'set-payout-account': 'set-payout-account',
    'shipping': 'shipping',
    'shipping-address': 'shipping-address',
    'shipping-settings': 'shipping-settings',
    'shops': 'shops',
    'shop-settings': 'shop-settings',
    'social-media': 'social-media',
    'start-selling': 'start-selling',
    'submit-request': 'submit-request',
    'tag': 'tag',
    'terms-conditions': 'terms-conditions',
    'ticket': 'ticket',
    'tickets': 'tickets',
    'wishlist': 'wishlist',
    'withdraw-money': 'withdraw-money',
    'about-us': 'about-us',
    'shipping-policy': 'shipping-policy',
    'write-for-us': 'write-for-us',
    'privacy-policy': 'privacy-policy',
    'ccavenue-payment-completed': 'ccavResponseHandler-post',
    'buy-now-shipping': 'buy-now-shipping',
    'payment-method-buy-now': 'Buy-Now-Payment-Methods',
    'payment-buy-now': 'Buy-Now-Payment',
    'forgot-password-user': 'forgot-password-user'
  });

  const [showWarning, setShowWarning] = useState(true);

  const handleRouteChange = (key, value) => {
    setRoutes(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSaveChanges = () => {
    // Validate routes for special characters
    const hasSpecialChars = Object.values(routes).some(route => 
      /[^a-zA-Z0-9-_]/.test(route)
    );
    
    if (hasSpecialChars) {
      alert('Warning: Some routes contain special characters that may cause issues.');
      return;
    }
    
    console.log('Routes saved:', routes);
    alert('Route settings saved successfully!');
  };

  const RouteRow = ({ label, routeKey }) => (
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex-1">
        <div className="bg-gray-200 px-4 py-3 rounded-lg text-gray-700 font-medium">
          {label}
        </div>
      </div>
      <div className="flex-1">
        <input
          type="text"
          value={routes[routeKey] || ''}
          onChange={(e) => handleRouteChange(routeKey, e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          placeholder={`Enter route for ${label}`}
        />
      </div>
    </div>
  );

  const routeData = [
    { label: 'add-coupon', key: 'add-coupon' },
    { label: 'add-product', key: 'add-product' },
    { label: 'add-shipping-zone', key: 'add-shipping-zone' },
    { label: 'admin', key: 'admin' },
    { label: 'blog', key: 'blog' },
    { label: 'bulk-product-upload', key: 'bulk-product-upload' },
    { label: 'cart', key: 'cart' },
    { label: 'category', key: 'category' },
    { label: 'change-password', key: 'change-password' },
    { label: 'comments', key: 'comments' },
    { label: 'contact', key: 'contact' },
    { label: 'coupons', key: 'coupons' },
    { label: 'dashboard', key: 'dashboard' },
    { label: 'downloads', key: 'downloads' },
    { label: 'earnings', key: 'earnings' },
    { label: 'edit-coupon', key: 'edit-coupon' },
    { label: 'edit-product', key: 'edit-product' },
    { label: 'edit-profile', key: 'edit-profile' },
    { label: 'edit-shipping-zone', key: 'edit-shipping-zone' },
    { label: 'featured-products', key: 'featured-products' },
    { label: 'followers', key: 'followers' },
    { label: 'following', key: 'following' },
    { label: 'forgot-password', key: 'forgot-password' },
    { label: 'help-center', key: 'help-center' },
    { label: 'latest-products', key: 'latest-products' },
    { label: 'members', key: 'members' },
    { label: 'membership-payment-completed', key: 'membership-payment-completed' },
    { label: 'messages', key: 'messages' },
    { label: 'orders', key: 'orders' },
    { label: 'order-completed', key: 'order-completed' },
    { label: 'order-details', key: 'order-details' },
    { label: 'payment', key: 'payment' },
    { label: 'payment-history', key: 'payment-history' },
    { label: 'payment-method', key: 'payment-method' },
    { label: 'payouts', key: 'payouts' },
    { label: 'product', key: 'product' },
    { label: 'products', key: 'products' },
    { label: 'product-details', key: 'product-details' },
    { label: 'profile', key: 'profile' },
    { label: 'promote-payment-completed', key: 'promote-payment-completed' },
    { label: 'quote-requests', key: 'quote-requests' },
    { label: 'refund-requests', key: 'refund-requests' },
    { label: 'register', key: 'register' },
    { label: 'register-success', key: 'register-success' },
    { label: 'reset-password', key: 'reset-password' },
    { label: 'reviews', key: 'reviews' },
    { label: 'rss-feeds', key: 'rss-feeds' },
    { label: 'sale', key: 'sale' },
    { label: 'sales', key: 'sales' },
    { label: 'search', key: 'search' },
    { label: 'select-membership-plan', key: 'select-membership-plan' },
    { label: 'seller', key: 'seller' },
    { label: 'settings', key: 'settings' },
    { label: 'set-payout-account', key: 'set-payout-account' },
    { label: 'shipping', key: 'shipping' },
    { label: 'shipping-address', key: 'shipping-address' },
    { label: 'shipping-settings', key: 'shipping-settings' },
    { label: 'shops', key: 'shops' },
    { label: 'shop-settings', key: 'shop-settings' },
    { label: 'social-media', key: 'social-media' },
    { label: 'start-selling', key: 'start-selling' },
    { label: 'submit-request', key: 'submit-request' },
    { label: 'tag', key: 'tag' },
    { label: 'terms-conditions', key: 'terms-conditions' },
    { label: 'ticket', key: 'ticket' },
    { label: 'tickets', key: 'tickets' },
    { label: 'wishlist', key: 'wishlist' },
    { label: 'withdraw-money', key: 'withdraw-money' },
    { label: 'about-us', key: 'about-us' },
    { label: 'shipping-policy', key: 'shipping-policy' },
    { label: 'write-for-us', key: 'write-for-us' },
    { label: 'privacy-policy', key: 'privacy-policy' },
    { label: 'ccavenue-payment-completed', key: 'ccavenue-payment-completed' },
    { label: 'buy-now-shipping', key: 'buy-now-shipping' },
    { label: 'payment-method-buy-now', key: 'payment-method-buy-now' },
    { label: 'payment-buy-now', key: 'payment-buy-now' },
    { label: 'forgot-password-user', key: 'forgot-password-user' }
  ];

  return (
    <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Route Settings</h1>
      
      <div className="space-y-2">
        {routeData.map((route, index) => (
          <RouteRow
            key={route.key}
            label={route.label}
            routeKey={route.key}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleSaveChanges}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Save Changes
        </button>
      </div>

      {showWarning && (
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-red-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Warning!
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  You cannot use special characters in routes. If your language contains special characters, please be careful when editing routes. If you enter an invalid route, you will not be able to access the related page.
                </p>
              </div>
              <div className="mt-3">
                <button
                  onClick={() => setShowWarning(false)}
                  className="text-sm text-red-800 hover:text-red-900 font-medium"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default RouteSettings;