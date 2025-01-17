'use client';
import React, { useState, useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FaPlus } from "react-icons/fa6";
import columnTextA from "../../assest/columnOne.svg";
import actionCol from "../../assest/actioncolumn.png";
import enrichCol from "../../assest/enrichcoulmn.png"
import playlogo from "../../assest/play_circle.png";
import bitScaleLogo from "../../assest/bitscaleLogo.svg";
import alertTriangle from "../../assest/alert-triangle.svg";
import bmwLogo from '../../assest/bmw.png'
import externalink from "../../assest/link-external-02.png";
import googlelogo from '../../assest/googlelogo.png'
import Loadingloder from '../../assest/loaderIcon.png';
import applelogo from "../../assest/applelogo.png";
import figmaicon from '../../assest/figmaicon.png'
import Image, { StaticImageData } from 'next/image';

interface TableData {
    playbutton: StaticImageData;
    input: string;
    actionLogo: StaticImageData | string;
    action: string;
    enrichLogo: StaticImageData | string;
    enrichCompany: string;
    [key: string]: string | StaticImageData;
}

interface columndata {
    name: string;
    logo: StaticImageData | string;
}

const MainTable: React.FC = () => {

    const [data, setData] = useState<TableData[]>([
        {
            playbutton: playlogo,
            input: "Oct 12, 2024 at 14:08 PM",
            actionLogo: '',
            action: "Bitscale Evaluation - Account relevancy check.csv",
            enrichLogo: bitScaleLogo,
            enrichCompany: "Bitscale Evaluation - Account relevancy check.csv",
        },
        {
            playbutton: playlogo,
            input: "Oct 12, 2024 at 14:08 PM",
            actionLogo: alertTriangle,
            action: "cell data size exceeds limit",
            enrichLogo: bmwLogo,
            enrichCompany: "BMW Evaluation - Relevancy check",
        },
        {
            playbutton: playlogo,
            input: "Oct 12, 2024 at 14:08 PM",
            actionLogo: externalink,
            action: "https://www.linkedIn.com/bitScale.ai/sample",
            enrichLogo: googlelogo,
            enrichCompany: "Google Evaluation - Lilevancy check.csv",
        },
        {
            playbutton: playlogo,
            input: "Oct 12, 2024 at 14:08 PM",
            actionLogo: Loadingloder,
            action: "Loading data, Please wait",
            enrichLogo: applelogo,
            enrichCompany: "Apple Evaluation - Olvancy check.csv",
        },
        {
            playbutton: playlogo,
            input: "Oct 12, 2024 at 14:08 PM",
            actionLogo: Loadingloder,
            action: "Loading data, Please wait",
            enrichLogo: figmaicon,
            enrichCompany: "Figma Evaluation - Evancy check.csv",
        },
    ]);

    const [columns, setColumns] = useState<columndata[]>([
        {
            name: "Input Column",
            logo: columnTextA,
        },
        {
            name: "Action Column",
            logo: actionCol,
        },
        {
            name: "Enrich Company",
            logo: enrichCol,
        },
    ]);

    const rowHeight = 36; 
    const [emptyRows, setEmptyRows] = useState([]);

    useEffect(() => {
        const calculateEmptyRows = () => {
            const pageHeight = window.innerHeight; 
            const totalRows = Math.floor(pageHeight / rowHeight); 
            const remainingRows = totalRows - data.length; 
            setEmptyRows(Array.from({ length: Math.max(remainingRows, 0) })); 
        };

        calculateEmptyRows();

        window.addEventListener('resize', calculateEmptyRows);
        return () => {
            window.removeEventListener('resize', calculateEmptyRows);
        };
    }, [data.length]);

    const handleAddColumn = () => {
        const newColumnName = `New Column ${columns.length + 1}`;
        const newColumn: columndata = { name: newColumnName, logo: "" };
        setColumns([...columns, newColumn]);
        setData(data.map(row => ({ ...row, [newColumnName]: "" })));
    };

    const handleAddRow = () => {
        const newRow: TableData = columns.reduce(
            (acc, column) => ({ ...acc, [column.name]: "" }),
            { playbutton: playlogo, input: "", actionLogo: "", action: "", enrichLogo: "", enrichCompany: "" }
        );
        setData([...data, newRow]);
    };


    return (
        <div className='w-full h-screen mt-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"'>
            <Table className='w-full h-full max-w-full min-w-[600px] overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"'>
                <TableHeader className=' w-full'>
                    <TableRow className='w-full h-[36px] flex items-center bg-[#F6F6F6]'>
                        <TableCell className='w-[31px] h-full bg-[#F6F6F6] border-l border-r border-[#E2E2E3]'></TableCell>
                        <TableCell className='w-[31px] h-full bg-[#F6F6F6] border-l border-r border-[#E2E2E3]'></TableCell>
                        {columns.map((column, index) => (
                            <TableCell key={index}
                                className={`w-[267px] h-full border-b border-r px-3 gap-[6px] flex items-center border-[#E2E2E3]
                             ${index === 0 ? 'bg-[#FEF2C7]' : 'bg-[#F6F6F6]'}`}
                            >
                                <Image src={column?.logo} alt='...' width={22} height={23} className={`object-contain ${column.logo ? 'block' : 'hidden'}`} />
                                <span className='text-[14px] leading-[16.94px] font-medium text-[#1C1B1F]'>{column.name}</span>
                            </TableCell>
                        ))}
                        <TableCell
                            onClick={handleAddColumn}
                            className='h-full flex items-center gap-2 pl-3 bg-[#F6F6F6] w-[267px]'>
                            <FaPlus /><p>Add Column</p>
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody className='w-full flex flex-col'>
                    {data.map((item, index) => (
                        <TableRow className='w-full flex items-center' key={index}>
                            <TableCell className='w-[31px] h-[36px] bg-[#FFFFFF] border-l border-r border-[#E2E2E3]'>{index + 1}</TableCell>
                            <TableCell className='w-[31px] h-[36px] bg-[#FFFFFF] border-l border-r border-[#E2E2E3]'>
                                <Image src={playlogo} alt='..' width={24} height={24} />
                            </TableCell>
                            <TableCell className='w-[267px] h-[36px] flex items-center px-3 gap-2 bg-[#FFFFFF] border border-[#E2E2E3]'>
                                {item.input}
                            </TableCell>
                            <TableCell className='w-[267px] h-[36px] flex items-center px-3 gap-2 bg-[#FFFFFF] border border-[#E2E2E3] overflow-hidden'>
                                <Image src={item?.actionLogo} alt=".."
                                    className={`w-4 h-4 object-contain ${item.actionLogo === '' ? 'hidden' : 'block'}`} />
                                <span title={item.action}
                                    className='text-[#374151] font-normal text-[14px] leading-5 truncate overflow-hidden whitespace-nowrap'>{item.action}</span>
                            </TableCell>
                            <TableCell className='w-[267px] h-[36px] flex items-center px-3 gap-2 bg-[#FFFFFF] border border-[#E2E2E3] overflow-hidden'>
                                <Image src={item?.enrichLogo} alt=".."
                                    className={`w-4 h-4 object-contain ${item.enrichLogo === '' ? 'hidden' : 'block'}`} />
                                <span title={item.enrichCompany}
                                    className='text-[#374151] font-normal text-[14px] leading-5 truncate overflow-hidden whitespace-nowrap'>{item.enrichCompany}</span>
                            </TableCell>
                            {columns?.map((column, colIndex) => (
                                colIndex > 2 ? (
                                    <TableCell
                                        key={`${index}-${colIndex}`}
                                        className="w-[267px] h-[36px] flex items-center px-3 gap-2 bg-[#FFFFFF] border border-[#E2E2E3] overflow-hidden"
                                    >
                                        {/* Add content rendering logic for the cells here */}
                                    </TableCell>
                                ) : null
                            ))}
                        </TableRow>
                    ))}
                    {emptyRows.map((_, index) => (
                        <TableRow className="h-[36px] w-full flex items-center bg-[#F6F6F6]" key={`empty-${index}`}>
                            <TableCell className="w-[31px] h-[36px] bg-[#F6F6F6] border border-[#E2E2E3]"></TableCell>
                            <TableCell className="w-[31px] h-[36px] bg-[#F6F6F6] border border-[#E2E2E3]"></TableCell>
                            {index === 0 ? (
                                <TableCell className="w-[267px] h-[36px] bg-[#F6F6F6] border border-[#E2E2E3] flex items-center gap-2" onClick={handleAddRow}>
                                    <FaPlus />
                                    <p>Add Row</p>
                                </TableCell>
                            ) : (
                                <TableCell className="w-[267px] h-[36px] bg-[#F6F6F6] border border-[#E2E2E3] flex items-center gap-2" onClick={handleAddRow}>

                                </TableCell>
                            )}
                            <TableCell className="w-[267px] h-[36px] bg-[#F6F6F6] border border-[#E2E2E3]"></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default MainTable