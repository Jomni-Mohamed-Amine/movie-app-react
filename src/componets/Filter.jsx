import React from 'react'

const Filter = ({setfiltredtitle,setRating}) => {
  return (
    <div className='bg-black p-5 flex gap-4'>
        <div>
        <label className="block text-gray-700 font-semibold mb-1">
        Filter by Title
      </label>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setfiltredtitle(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div>
        <label className="block text-white font-semibold mb-1">
       rating
      </label>
     <select name="" id="" onChange={(e)=>setRating(e.target.value)} >
        <option value="" className='text-blue-600'>all rating</option>
        {[1,2,3,4,5,6,7,8,9].map((r)=>(
            <option key={r} value={r} className='text-black'>{r}</option>
        ))}
     </select>
    </div>
    </div>
    
    
  )
}

export default Filter
