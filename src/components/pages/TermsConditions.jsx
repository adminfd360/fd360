import Nav from "../navbar/Nav"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import banner from './assets/terms.webp'
import { client } from '../../lib/sanity'

const TermsConditions = () => {
  const [termsData, setTermsData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    // Fetch terms and conditions data from Sanity
    const fetchTermsData = async () => {
      try {
        const query = `*[_type == "termsAndConditions"] | order(_createdAt asc){
                        _id,
                        title,
                        isActive,
                        content,
                        _createdAt
                      }`
        const data = await client.fetch(query)
        setTermsData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching terms data:', error)
        setLoading(false)
      }
    }

    fetchTermsData()
  }, [])

  const renderContent = (content) => {
    return content.map((block, index) => {
      if (block._type !== 'block') return null;
      
      return (
        <p key={block._key} className="leading-7">
          {block.children.map((child, childIndex) => {
            if (child.marks?.includes('strong')) {
              return <strong key={child._key}>{child.text}</strong>;
            }
            return child.text;
          })}
        </p>
      );
    });
  };

  return (
    <>
      <div className="h-[380px] md:h-[480px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="bg-black/20 w-full pt-[96px] absolute top-0">
          <Nav />
        </div>
        <h2 className="text-white text-[clamp(30px,3.2vw,55px)] font-semibold">Terms and Conditions</h2>
      </div>
      <div className="w-full">
        <div className="w-full max-w-[1280px] p-4 py-20 mx-auto">
          {loading ? (
            <p>Loading...</p>
          ) : termsData ? (
            <div className="prose prose-lg max-w-none">
              {termsData.map((term, index) => (
                <div key={term._id} className="mb-8">
                  <h2 className="text-blue-500 font-semibold mb-1 mt-8 text-lg">{term.title}</h2>
                  {renderContent(term.content)}
                </div>
              ))}
            </div>
          ) : (
            <p>No terms and conditions content available.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default TermsConditions