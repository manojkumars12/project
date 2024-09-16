import { useEffect, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil";
import { paletteIdsAtom, paletteStateFamily } from "../store/PaletteAtom";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const ColorPalette = () => {    
    const [paletteIds, setPaletteIds] = useRecoilState(paletteIdsAtom);
    const handleGeneratePalette = () => {
        const len = paletteIds.length;
        setPaletteIds((prev) => [...prev, len]);
        console.log(len);
    }
    return (
    <div>
        <div className="flex flex-col justify-center items-center">
            <button onClick={handleGeneratePalette} className="bg-blue-500 p-3 text-white font-mono text-lg font-bold m-5 hover:bg-blue-700 hover:scale-110" >Generate 8-color palette</button>
            {paletteIds.map((paletteId) => {
                    return <GeneratePalette key={paletteId} id={paletteId}/>
            })}
        </div>
    </div>
        
    )
}
const GeneratePalette = ({id}) => {
    const [paletteIds, setPaletteIds] = useRecoilState(paletteIdsAtom);
    const [generatedPalette, setGeneratedPalette] = useRecoilState(paletteStateFamily(id));
    const [isModelOpen, setIsModelOpen] = useState(true)

    const generateRandomMatchingColors = () => {
        const baseColors = Array(8).fill(0).map(() => getRandomColor());
        return baseColors.map((baseColor) => [
          baseColor,
          shadeColor(baseColor, -20),
          shadeColor(baseColor, 20),
        ]);
      };
    
      const shadeColor = (color, percent) => {
        const num = parseInt(color.slice(1), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = ((num >> 8) & 0x00ff) + amt;
        const B = (num & 0x0000ff) + amt;
        return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
      };
      const togglePattern = (id) => {
        setIsModelOpen(prevState => !prevState)
      }
    
    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const colorPalette = generateRandomMatchingColors();
    
    useEffect(() => {
        setGeneratedPalette(colorPalette);
        console.log(colorPalette)
    }, [])
    const deletePalette = (id) => {
        const updatedPaletteIds = paletteIds.filter(ids => ids != id);
        // updatedPaletteIds.splice(id+1, 1);
        setPaletteIds(() => updatedPaletteIds);        
    }

    return (
        <div className="border-4 border-gray gap-2 rounded-lg">
        <div className="flex justify-evenly">
            <h2 className="text-lg font-semibold mb-2 cursor-pointer flex items-center" onClick={() => togglePattern(id)}>
                <IoIosArrowDropdownCircle className={`text 2-xl mr-2 transition-transform duration-300 ${isModelOpen ? '' : '-rotate-90'}`}/>
                Palette {id + 1}</h2>
            <button className="text-red-500 hover:underline font-semibold" onClick={() => deletePalette(id)}>Delete</button>
        </div>
        <div className="flex items-center justify-between p-2 w-[100vw] md:w-[50vw]">
            {isModelOpen && (generatedPalette.map((palette, index) => {
                return <div key={index}>
                    <div className='w-16 h-16 rounded-full cursor-pointer transition-all duration-300 hover:scale-105'style={{backgroundColor: palette[0]}}></div>
                    <span>{palette[0]}</span>
                </div>
            }))}
        </div>
      </div>
    )
}
export default ColorPalette;