import React from 'react'
import './styles.css'
function Links() {
	return (
		 <div>
             <a className="Link" href="http://www.github.com">GitHub</a>
             <a className="Link" href="http://elearn.sunway.edu.my">eLearn</a>
             <a className="Link" href="http://izone.sunway.edu.my">iZone</a>
             <a className="Link" href="http://www.twitter.com">Twitter</a>
          </div>
	)
}

export default Links


// {links.map((item, index) => (
//     <a
//       className="App-link"
//       href={item.url}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {item.name}
//     </a>
//   ))}