'use client';

import { Trash } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUploader({ onFileAccepted }: { onFileAccepted: (file: File) => void }) {
    const [fileSelected, setFileSelected] = useState<any>();
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length) {
            onFileAccepted(acceptedFiles[0]);
            setFileSelected(acceptedFiles[0])
        }
    }, [onFileAccepted]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        multiple: false,
    });

    const deleteFileSelected = () => {
        //onFileAccepted(null);
        setFileSelected(null)
    }
    return (
            <div className={`w-full h-1/5 flex flex-col items-center justify-center border-4 ${fileSelected ? 'border-blue-100' : 'border-gray-100' }  rounded-lg p-6`}>
            <div
                {...getRootProps()}
                className={`w-full h-full flex flex-col items-center justify-center border-3 border-dashed ${fileSelected ? 'border-blue-200 hover:bg-blue-50' : 'border-gray-200 hover:bg-gray-50' } rounded-lg p-6 text-center cursor-pointer  transition`}
            >
                <input {...getInputProps()} />
                {
                    !fileSelected && (
                        <p>{isDragActive ? 'Solte o arquivo aqui...' : 'Arraste um PDF ou clique para selecionar'} </p>
                    )
                }
                {
                    fileSelected && (
                        <div className='w-full flex flex-row justify-between items-center bg-white px-6 py-6 border-2 border-gray-100 rounded-lg text-left'>
                            <p>{fileSelected ? fileSelected.name : isDragActive ? 'Solte o arquivo aqui...' : 'Arraste um PDF ou clique para selecionar'} </p>
                            <Trash className={` ${fileSelected ? 'text-blue-800' : 'text-gray-800'}`} onClick={(e) => {
                                e.stopPropagation();
                                deleteFileSelected();
                            }} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}