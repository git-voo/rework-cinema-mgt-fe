export default function toggleObj(obj, objectKey, property) {
    const updatedObj = { ...obj };
  
    if (property) {
      Object.keys(updatedObj[objectKey]).forEach((key) => {
        updatedObj[objectKey][key] = false;
      });
  
      updatedObj[objectKey][property] = true;
    } else {
      Object.keys(updatedObj).forEach((key) => {
        updatedObj[key] = false;
      });
  
      updatedObj[objectKey] = true;
    }
  
    return updatedObj;
  }
  