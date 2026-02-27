import { UploadIcon, XIcon } from "lucide-react"
import type { UploadZoneProps } from "../types"
import { useRef } from "react"

const UploadZone = ({ label, file, onClear, onChange }: UploadZoneProps) => {

    const inputRef = useRef<HTMLInputElement | null>(null)

    return (
        <div className="relative group">
            <div className={`relative h-64 rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center bg-white/2 p-6 ${file ? 'border-violet-600/50 bg-violet-500/5' : 'border-white/10 hover:border-violet-500/30 hover:bg-white/5'}`}>

                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    onChange={onChange}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                />

                {file ? (
                    <>
                        <img src={URL.createObjectURL(file)} alt="preview" className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-60" />
                        <button
                            type="button"
                            onClick={() => {
                                if (inputRef.current) inputRef.current.value = ""
                                onClear()
                            }}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-red-500/20 text-white hover:text-red-400 transition-colors z-20"
                        >
                            <XIcon className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10">
                            <p className="text-sm font-medium truncate">{file.name}</p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <UploadIcon className="w-8 h-8 text-gray-400 group-hover:text-violet-400 transition-colors" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{label}</h3>
                        <p className="text-sm text-gray-400 text-center max-w-[200px]">
                            Drag & drop or click to upload
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default UploadZone
