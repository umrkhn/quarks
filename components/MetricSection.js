const MetricSection = () => {
  return (
    <section>
      <div className='px-4 py-16 md:px-8 md:py-24 max-w-7xl mx-auto'>
        <div className='mb-12 md:mb-16 max-w-3xl'>
          <span className='capitalize text-primary-700 text-sm font-semibold block md:text-base'>
            launch faster
          </span>
          <h2 className='text-gray-900 text-3xl font-semibold mt-3 md:text-4xl'>
            Build something great
          </h2>
          <p className='text-lg text-gray-500 mt-4 md:mt-5 md:text-xl'>
            We’ve done all the heavy lifting so you don’t have to — get all the
            data you need to launch and grow your business faster.
          </p>
        </div>
        <div className='grid gap-y-8 lg:grid-cols-3 lg:gap-x-8'>
          <div className='p-8 text-center rounded-2xl bg-gray-50 lg:p-16 lg:col-span-2'>
            <div className='text-primary-600 text-5xl font-semibold lg:text-6xl'>
              100%
            </div>
            <h5 className='text-gray-900 text-lg font-medium mt-3'>
              End-to-end encryption
            </h5>
            <p className='text-gray-500 text-base mt-2'>
              All messages sent are 100% end-to-end encrypted
            </p>
          </div>
          <div className='p-8 text-center rounded-2xl bg-gray-50 lg:p-16'>
            <div className='text-primary-600 text-5xl font-semibold lg:text-6xl'>
              7,000+
            </div>
            <h5 className='text-gray-900 text-lg font-medium mt-3'>
              Global customers
            </h5>
            <p className='text-gray-500 text-base mt-2'>
              We’ve helped over 7,000 amazing global companies.
            </p>
          </div>
          <div className='p-8 text-center rounded-2xl bg-gray-50 lg:p-16'>
            <div className='text-primary-600 text-5xl font-semibold lg:text-6xl'>
              50k
            </div>
            <h5 className='text-gray-900 text-lg font-medium mt-3'>
              Global downloads
            </h5>
            <p className='text-gray-500 text-base mt-2'>
              Our app has been downloaded over 10k times.
            </p>
          </div>
          <div className='p-8 text-center rounded-2xl bg-gray-50 lg:p-16 lg:col-span-2'>
            <div className='text-primary-600 text-5xl font-semibold lg:text-6xl'>
              600+
            </div>
            <h5 className='text-gray-900 text-lg font-medium mt-3'>
              5-star reviews
            </h5>
            <p className='text-gray-500 text-base mt-2'>
              We’re proud of our 5-star rating with over 200 reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricSection;
