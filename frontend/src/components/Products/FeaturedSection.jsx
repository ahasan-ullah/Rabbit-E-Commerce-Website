import { HiShoppingBag } from "react-icons/hi2"

const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiShoppingBag className="text-xl"></HiShoppingBag>
          </div>
          <h4 className="tracking-tighter mb-2"></h4>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection