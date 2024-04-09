export const Content2 = () => {
    return (
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">

                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    The quick, brown fox jumps over a lazy dog
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="grid grid-cols-2 gap-5">
                    <img
                        className="col-span-2 h-56 w-full rounded object-cover shadow-lg"
                        src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <img
                        className="h-48 w-full rounded object-cover shadow-lg"
                        src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <img
                        className="h-48 w-full rounded object-cover shadow-lg"
                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="mb-4 border-b pb-4">
                        <h6 className="mb-2 font-semibold leading-5">
                            Sit error voluptatem accusantium
                        </h6>
                        <p className="text-sm text-gray-900">
                            Sportacus andrew weatherall goose Refined gentlemen super mario
                            des lynam alpha trion zap rowsdower, omar sharif old.
                        </p>
                    </div>
                    <div className="mb-4 border-b pb-4">
                        <h6 className="mb-2 font-semibold leading-5">
                            Cheese on toast airedale the big cheese
                        </h6>
                        <p className="text-sm text-gray-900">
                            Chase ball of string eat plants, meow, and throw up because I ate
                            plants going to catch the red dot today going to catch the red dot
                            today. I could pee on this if I had the energy.
                        </p>
                    </div>
                    <div>
                        <h6 className="mb-2 font-semibold leading-5">
                            A flower in my garden, a mystery
                        </h6>
                        <p className="text-sm text-gray-900">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae doloremque laudantium.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};