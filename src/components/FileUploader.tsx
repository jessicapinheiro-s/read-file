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
        <div className='w-full h-3/5 flex flex-col items-center justify-center border-4 border-gray-100 rounded-lg p-6'>
            <div 
                {...getRootProps()}
                className="w-full h-full flex flex-col items-center justify-center border-3 border-dashed border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition"
            >
            <input {...getInputProps()} />
            {
                isDragActive
                    ? <p className="text-blue-500">Solte o arquivo aqui...</p>
                    : <p className="text-gray-500">Arraste um PDF ou clique para selecionar</p>
            }
        </div>
        </div>
    )
}