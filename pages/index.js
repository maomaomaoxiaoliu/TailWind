import Nav from '../components/nav'

export default () => (
  <div style={{marginBottom: '20rem'}}>
    <Nav />
    
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img className="rounded-lg md:w-56" src='/static/logo.png' alt="Woman paying for a purchase" />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
        <p className="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </div>

    <button className="btn btn-blue">
      Button
    </button>

    <button className="btn btn-gray">
      Button
    </button>

    <div className="bg-gradient-brand">
      asfffffffffff
    </div>

    <br />
   
    <input placeholder="test" className="border-black focus:bg-white hover:bg-black focus:border-white hover:border-black" />
  
    <ul className="list-disc list-inside">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>

    <div className="bg-gray-200 p-4">
      <div className="block text-gray-700 text-center bg-gray-400 px-4 py-2">1</div>
      <div className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-4">2</div>
      <div className="block text-gray-700 text-center bg-gray-400 px-4 py-2 mt-4">3</div>
    </div>

    <div className="bg-gray-200 m-5">
      <div className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div className="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <div className="bg-gray-200 m-5">
      <div className="inline text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2">1</div>
      <div className="inline text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2">2</div>
      <div className="inline text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2">3</div>
    </div>

    <div className="flex bg-gray-200 m-5">
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <div className="inline-flex bg-gray-200 m-5">
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <div className="table w-full">
      <div className="table-row">
        <div className="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">A cell with more content</div>
        <div className="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 2</div>
        <div className="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">Cell 3</div>
      </div>

      <div className="table-row">
        <div className="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 4</div>
        <div className="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">A cell with more content</div>
        <div className="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 6</div>
      </div>
    </div>

    <div className="flex sm:inline-block md:block lg:hidden sl:flex bg-gray-200 m-5">
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
      <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
    </div>

    <div className="bg-gray-200 p-4 clearfix">
      <img className="float-left mr-4 my-2 h-32" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula
      </p>
    </div>

    <div className="bg-gray-400">
      <img className="object-contain h-48 w-full ..." src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
    </div>
  </div>
)
