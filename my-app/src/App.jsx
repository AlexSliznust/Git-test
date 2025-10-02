// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
const users = [
	{name: 'user1', surn: 'surn1', age: 30},
	{name: 'user2', surn: 'surn2', age: 31},
	{name: 'user3', surn: 'surn3', age: 32},
];


function App() {
	const res = users.map(function(item, index, age) {
		return <ul>
			<li>{item.name}</li>:
			<li>{index.surn}</li>
      <li>{age.age}</li>
		</ul>;
	});
	return <>
  {res}
  </>
}
export default App
