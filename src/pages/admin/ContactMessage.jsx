import React, { useState } from 'react';
import Adminheader from "../../components/admin_components/Adminheader";
import Adminfooter from "../../components/admin_components/Adminfooter";


const App = () => {
  // State for the number of entries to show
  const [entriesToShow, setEntriesToShow] = useState('30');
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data for contact messages
  const messages = [
    {
      id: 174,
      name: 'Belen Ives',
      email: 'ives.belen@yahoo.com',
      message: 'Hi Dear Track Your Keywords Rankings in Google Just 1-Click No Monthly Payment https://toyfort.in/100% Automated Software Tracks All Your Google Rankings No More Manually Tracking Your Rankings ZERO Manual Work Never Pay Monthly Fees for Rank Tracking Software Ever Again Track Sites on Any Google Domains & Regions Track 100s of Keywords & Multiple Sites Easily Completely Set & Forget , Get Rankings Daily... No Monthly feel only $ 22 OneTime Payment 30 Days 100 % Money Back Guarantee For extra info Go at : https://bit.ly/3161lyq',
      date: '2024-02-20 / 10:54',
    },
    {
      id: 173,
      name: 'Trevor Burleson',
      email: 'trevor.burleson@outlook.com',
      message: 'Hello Buddy Rank Vault : Ranks Any Site on the 1st Page of Google https://toyfort.in/Creates Unlimited Backlinks To ANY Site You Want Finds 1000s of Keywords You Can Rank For Cloud App - There\'s nothing to install Keywords Search Website Analysis Create Backlinks Create Content Sell SEO Services to your Clients No Monthly feel only $ 12.95 OneTime Payment 30 Days Money Back Guarantee For other information Visit at : https://bit.ly/42Lsy5j',
      date: '2024-02-18 / 20:01',
    },
    {
      id: 172,
      name: 'Epifania Bellamy',
      email: 'epifania.bellamy@gmail.com',
      message: 'Hi Dear Jett : Get Free Youtube Traffic on AuotPilot https://toyfort.in/Jett Automation : No need to do any work whatsoever . Just let Jett take care of it all on autopilot ... Jett Traffic : We don\'t do any ads , or traffic generation . Jett does all of that for us on autopilot .. No Monthly fee ! Generate unlimited leads only $ 17 OneTime Payment 30 Days Money Back Guarantee For more info Go at : https://bit.ly/30NS83N',
      date: '2024-02-18 / 02:42',
    },
    {
      id: 171,
      name: 'Mellissa Messer',
      email: 'mellissa.messer@gmail.com',
      message: 'hey ! I\'m really impressed with what you folks are doing at toyfort.in and curious if you would allow me penning an article about you guys and posting it on my website ? I want is to do this completely free no catches , just need your permission first ! Here\'s where I\'ll be posting it , and we usually get lots of great traffic ! See for yourself here : https://ibit.ly/let-us-feature-your-business-15 This is my little way to \' pay it forward \' : ) Can\'t wait to hear back ! Best wishes , Mellissa',
      date: '2024-02-18 / 02:12',
    },
    {
      id: 170,
      name: 'Delilah Demaine',
      email: 'demaine.delilah@gmail.com',
      message: 'Hi Dear MailMate : Send Unlimited Email to Inbox & No Monthly Fees https://toyfort.in/Send Unlimited Emails to Unlimited Subscribers 100 % inbox delivery with High Quality servers . No Monthly fee ! Get Free Traffic from Emails and Earn by sale Generate unlimited leads only $ 9.89 OneTime Payment 30 Days Money Back Guarantee For extra info Go at : https://bit.ly/49/VtiT',
      date: '2024-02-17 / 00:54',
    },
    {
        id: 149,
        name: 'Carma Goldstein',
        email: 'goldstein.carma@hotmail.com',
        message: 'Hi Friend Earn Extra Revenue By Email Marketing https://toyfort.in/Full Guide to Email Marketing Small Investment and Big Return Promote Your own Product or Promote affiliate Product and get 50 % Commission For other information Visit at : https://bit.ly/3umQHT2',
        date: '2024-02-06 / 03:28',
    },
    {
        id: 148,
        name: 'Rosaura Blakely',
        email: 'blakely.rosaura@googlemail.com',
        message: 'Hi Buddy Generate Unlimited Content Each Month - No Monthly Payment-https://toyfort.in/I have visit your site https://toyfort.in/ and found you are upload content each month . Now days mostly webmaster posting AI content like as JASPER on their blog . Now no need to pay monthly subsription to generate AI Content for limited articles . Generate Unlimited Content Each Month Go Break Free and Limitless , generate as many copies as you want every month and every day , there is no limit . Unlock Unlimited Longer Content-Length Don\'t Limit Your Content to 300-500 Character , Unlock Unlimited Longer Content-Length for All Your Content Types Advanced Integration Directly post content/articles on wordpress/blogger Generate Unlimited Content Each Month Price = $ 77 https://bit.ly/3QqNkm7 100,000 COntent/Article each month Price = $ 37 https://bit.ly/3McUmIH',
        date: '2024-02-05 / 12:46',
    },
    {
        id: 147,
        name: 'Daryl Garratt',
        email: 'daryl.garratt@outlook.com',
        message: 'This message came to you and I can make your ad message go to millions of websites the same way . It\'s a great deal compared to normal advertising . For more information , please email me or skype me below . P . Stewart Email : 9gn8zw@gomail2.xyz Skype : live:.cid.2bc4ed65aa40fb3b',
        date: '2024-02-05 / 11:42',
    },
    {
        id: 146,
        name: 'Bell Grout',
        email: 'bell.grout@yahoo.com',
        message: 'Hi Webmaster . Earn Extra Money from your site https://toyfort.in Hi Dear Earn Extra Money from your site https://toyfort . in Per Click Rate = Upto $ 0.25 You can Earn Extra Money from https://toyfort.in by posting banner . Low Traffic , No Issue , Every Site Acceptable No Tension of Ban like as Adsense Already earning with Adsense ? You can use it for extra Income More site mean more income For other information Visit here and Sign UP at : https://bit.ly/47BuOgq',
        date: '2024-02-05 / 01:29',
    },
    {
        id: 145,
        name: 'Michael Pickett',
        email: 'troy.pickett21@outlook.com',
        message: 'Development Outsourcing Agency - Development Outsourcing ... Leading Outsource Development Company . Trusted for 10 + years . Our top devs join your team . Let\'s talk about the our Advantage ! Leading Outsource Development Company for 10 + years . Prices for a simple website starts @ $ 80 . Ecommerce sites $ 300 . Hourly Rate of $ 7 . Contact us now . https://outsource-bpo . com/website/Also , Introducing Turbo Charged , Super Powerful Backlinks for your website\'s SEO . Building Quality Links is tough . Let The Experts Do It Right For Your Target Market . We Provide Backlink Services that Offer the Strongest , But Affordable Links . Read carefully here - https://alwaysdigital.co/lgt and See your SEO rankings Sky Rocket',
        date: '2024-02-04 / 01:59',
    },
  ];

  // Filtered messages based on search term (simple case-insensitive search on name, email, message)
  const filteredMessages = messages.filter(message =>
    message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic (simplified for demonstration)
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = parseInt(entriesToShow, 10);
  const totalPages = Math.ceil(filteredMessages.length / messagesPerPage);

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = filteredMessages.slice(indexOfFirstMessage, indexOfLastMessage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
     <div className="flex-1 bg-gray-100 min-h-screen -ml-[30px] overflow-auto">
        <Adminheader />
  
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <script src="https://cdn.tailwindcss.com"></script> {/* Load Tailwind CSS */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Contact Messages</h1>

      {/* Controls: Show entries and Search */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="text-gray-700 mr-2">Show</span>
          <select
            className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={entriesToShow}
            onChange={(e) => {
              setEntriesToShow(e.target.value);
              setCurrentPage(1); // Reset to first page on entries change
            }}
          >
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="flex items-center w-full sm:w-auto">
          <span className="text-gray-700 mr-2">Search:</span>
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500 flex-grow"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Options
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentMessages.length > 0 ? (
                currentMessages.map((message) => (
                  <tr key={message.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {message.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {message.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline cursor-pointer">
                      {message.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs overflow-hidden text-ellipsis">
                      {message.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {message.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <select className="border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                        <option>Select an option</option>
                        <option>View</option>
                        <option>Delete</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-700">
            Number of Entries: {filteredMessages.length}
          </div>
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Adminfooter />
      
    </div>
  );
};

export default App;
