import { Accordian } from "../../atoms"
import { Service_Items } from "../../constants/api"

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-0 gap-y-10">
        <h2 className="text-white font-bold text-4xl">
            Services
        </h2>
        <div className="w-full flex flex-col gap-y-2 xl:px-20">
            {Service_Items.map((item, index) => (
                <Accordian {...item} key={index} />
            ))}
        </div>
    </div>
  )
}

export default Services