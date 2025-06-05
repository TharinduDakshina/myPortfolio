import ResponsiveAppBar from "@/app/components/layout/responsiveAppBar";
import Box from "@mui/material/Box";

export default function Layout({children}: {children: React.ReactNode} ) {

    return (
        <Box sx={{ display: 'flex' }}>
            <ResponsiveAppBar/>
            <main style={{flex: 1}}>{children}</main>
        </Box>
    )
}