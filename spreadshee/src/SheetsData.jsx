export function Sheet({uniqueId,selectedSheet , selectedColor}) {
  return (
    <>
    <textarea  style={{backgroundColor : selectedColor || "white"}} rows="1" cols="20" className="border-2 border-black p-2 hover:cursor-pointer font-bold" onClick={()=>selectedSheet(uniqueId)}></textarea>
    </>
  );
}
