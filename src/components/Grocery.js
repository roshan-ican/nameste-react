import React from 'react'

const dummyGroceries = [
  { id: 1, name: 'Apples', quantity: '1 kg', price: '₹120' },
  { id: 2, name: 'Milk', quantity: '1 litre', price: '₹60' },
  { id: 3, name: 'Bread', quantity: '1 loaf', price: '₹40' },
  { id: 4, name: 'Eggs', quantity: '12 pcs', price: '₹70' },
  { id: 5, name: 'Rice', quantity: '5 kg', price: '₹500' },
]

const Grocery = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Grocery Items</h2>
      <ul className="space-y-2">
        {dummyGroceries.map(item => (
          <li
            key={item.id}
            className="border p-3 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">{item.quantity}</p>
            </div>
            <p className="font-semibold">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Grocery