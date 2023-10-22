
import ListeDoc from './ListeDoc'

const index = () => {
    return (
        <div className="relative mt-12">
            <div className="absolute inset-0 opacity-20"></div>
            <div className="relative flex">
                <div className="w-full mx-4">
                    <div className="flex flex-wrap gap-4 text-md uppercase text-brown font-semibold">
                        <ListeDoc />
                    </div>
                    <div className="mt-2 border-b border-brown opacity-30 w-full"></div>
                </div>
            </div>
            <div className="">
            </div>
        </div>
    )
}

export default index