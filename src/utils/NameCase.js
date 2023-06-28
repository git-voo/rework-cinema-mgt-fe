export function nameCase(query) {
  if (!query) return false;

  const arr = query.toLowerCase().split(" ");
  const result =[]

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]; 
    result.push(element.charAt(0).toUpperCase() + element.substr(1) )
    
   }

  return result.join(" ")
}

 