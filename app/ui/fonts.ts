import { Inter } from 'next/font/google';
import {Lusitana} from "next/font/google";
import {subset} from "semver";
import {undefined} from "zod";

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({weight: '400', subsets: ['latin']})