import React from 'react'
import {Menu} from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '../../../../components/ui/avatar'
import {useLocation} from 'react-router-dom'
const Topbar =() =>{
    const location = useLocation()
    const label = location.pathname.split('/').pop()
    return (
        <div className="flex justify-between items-center px-4 h-16 bg-white border-b">
            <h2 className="capitalize text-xl font-semibold text-gray-800">
                {label}
            </h2>

            <div className="flex items-center gap-4">
                <Menu className="h-6 w-6 text-gray-600 cursor-pointer"/>

                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>DOC</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Topbar