"use client";
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='pb-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950'>
        <div className='container mx-auto text-center pt-12 md:pt-20'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl pb-6 font-bold tracking-tight'>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 dark:from-blue-400 dark:to-teal-300">
                    Manage Your Finances
                </span> <br/>
                <span className="text-gray-800 dark:text-gray-200">
                    with Intelligence
                </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
            </p>
            <div className="mb-16">
                <Link href="/dashboard">
                    <Button size="lg" className="px-12 py-6 text-lg bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                        Get Started
                    </Button>
                </Link>
            </div>
            <div>
                <div>
                    <Image
                    src="/banner.jpeg"
                    width={1280}
                    height={720}
                    alt="Banner Image"
                    className="rounded-lg shadow-l2xl border mx-auto"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection;