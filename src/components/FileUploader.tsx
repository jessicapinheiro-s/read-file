'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUploader({ onFileAccepted }: { onFileAccepted: (file: File) => void }) {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length) {
            onFileAccepted(acceptedFiles[0]);
        }
    }, [onFileAccepted]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        multiple: false,
    });
    return (
        <div className='w-full h-4/5 flex flex-col items-center justify-center '>
            <div 
                {...getRootProps()}
                className="w-full h-full border-3 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition"
            >
            <input {...getInputProps()} />
            {
                isDragActive
                    ? <p className="text-blue-500">Solte o arquivo aqui...</p>
                    : <p>Arraste um PDF ou clique para selecionar</p>
            }
        </div>
        </div>
    )
}