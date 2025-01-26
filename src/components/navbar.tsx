'use client';

import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem} from "@/components/ui/navbar-menu";
import {cn} from "@/utils/cn";
import Routes from "@/utils/routes";
import Link from "next/link";

function Navbar({className}: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <Link href={Routes.home}>
                    <MenuItem setActive={setActive} active={active} item={'Home'}/>
                </Link>
                <MenuItem setActive={setActive} active={active} item={'Our Courses'}>
                    <div className={'flex flex-col space-y-4 text-sm'}>
                        <HoveredLink href={Routes.courses}>All Courses</HoveredLink>
                        <HoveredLink href={'#'}>Basic Music Theory</HoveredLink>
                        <HoveredLink href={'#'}>Advanced Composition</HoveredLink>
                        <HoveredLink href={'#'}>Songwriting</HoveredLink>
                        <HoveredLink href={'#'}>Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={Routes.contact}>
                    <MenuItem setActive={setActive} active={active} item={'Contact Us'}/>
                </Link>
            </Menu>
        </div>
    );
}

export default Navbar;
