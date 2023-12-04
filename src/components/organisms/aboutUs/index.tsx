
import { ABOUTUS_CONTENT } from "../../constants/api"

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-0">
        <h2 className="text-white font-bold text-4xl mb-10">
          About Us
        </h2>
        <div className="w-full flex flex-col gap-y-2 xl:px-20">
          {ABOUTUS_CONTENT.map((content, index) => (
            <h2 key={index} className="text-white text-2xl font-normal w-full">
              {content}
            </h2>
          ))}
        </div>
    </div>
  )
}

export default AboutUs