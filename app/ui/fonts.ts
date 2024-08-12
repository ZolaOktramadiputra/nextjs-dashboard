import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

export const inter = Inter({ subsets: ['latin'] });
export const poppins = Poppins({
    weight: [ '300', '400', '600'],
    subsets: ['latin-ext']
 });