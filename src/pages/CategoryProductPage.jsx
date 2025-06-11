import { useParams } from 'react-router-dom'
import { useEffect, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'

function CategoryProductPage() {
  const { category } = useParams()
  const { sidebarFilter, sidebarProducts } = useContext(AppContext)
  const [showSidebar, setShowSidebar] = useState(false)

  // Filter products when category changes
  useEffect(() => {
    if (category) {
      sidebarFilter(category)
    }
  }, [category])

  // Auto-hide sidebar toggle when screen is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(false) // No need for toggle on desktop
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Toggle button for mobile */}
      <div className="md:hidden flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Products</h2>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-sm px-3 py-1 border rounded text-blue-600"
        >
          {showSidebar ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar: visible if toggled on small, always on large */}
        <div className={`${showSidebar ? 'block' : 'hidden'} md:block w-full md:w-64 border-r`}>
          <Sidebar />
        </div>

        {/* Product Grid */}
        <div className="flex-1 p-4">
          {Array.isArray(sidebarProducts) && sidebarProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sidebarProducts.map((item, index) => (
                <Card
                  className="border border-black cursor-pointer"
                  key={index}
                  discount={item.discount_rate}
                  imageUrl={item.image_default}
                  title={item.title}
                  originalPrice={item.price / 100}
                  discountedPrice={
                    Math.ceil((item.price / 100) * (1 - item.discount_rate / 100)) - 1
                  }
                  onClick={() => console.log(item.slug)} // Replace with handler
                  slug={item.slug}
                />
              ))}
            </div>
          ) : (
            <p>No items.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryProductPage
