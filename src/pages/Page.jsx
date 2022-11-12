
const Page = () => {

    return (
        <div className='app'>
            <div className="container">
                <div className='min-h-full h-screen bg-gradient-to-bl from-green-400 to-blue-500'>
                    <div className='items-center justify-center content-center flex flex-col text-center'>
                        <h1 className='font-poorStory text-6xl py-2'>Hello World</h1>
                        <h2 className='text-5xl py-3'> A Start</h2>
                        <div className='h-auto py-5 mx-3 bg-slate-800 text-slate-200 rounded-lg shadow-2xl flex flex-col items-center justify-center content-center'>
                            <p className='font-righteous max-w-md'>
                                The container class sets the max-width of an element to match the min-width of the current breakpoint. This is useful if you’d prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport.
                            </p>
                            <p className='font-kanit'>-tailwind</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page