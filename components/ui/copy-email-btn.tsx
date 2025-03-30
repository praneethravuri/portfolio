"use client"
import React, { useState } from 'react'
import { IconCopy, IconCheck } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const CopyEmailBtn = () => {
    const [copied, setCopied] = useState(false)
    const email = "pravdevrav@gmail.com"

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 5000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }

    return (
        <Button
            variant="ghost"
            onClick={copyToClipboard}
            className='cursor-pointer'
        >
            {copied ? (
                <>
                    <IconCheck size={16} className="text-green-400" />
                    Copied!
                </>
            ) : (
                <>
                    <IconCopy size={16} />
                    Copy Email
                </>
            )}
        </Button>
    )
}

export default CopyEmailBtn 