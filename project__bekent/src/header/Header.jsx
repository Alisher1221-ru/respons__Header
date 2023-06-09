import { Box, Button, Container, Flex, Input, Select, Text } from "@chakra-ui/react";
import img__icon from "../img/Layer_1.png"
import { HamburgerIcon, PhoneIcon, Search2Icon } from '@chakra-ui/icons'

export default function Header() {
    return(
        <Flex flexDirection={"column"} bg={"gray.100"} alignItems={"center"} h={{base:"90px",lg:"150px"}} w={"100%"} p={{base:"10px 10px 0",lg:"10px 60px 0",md:"10px 15px 0","2xl":"10px 150px 0"}}>
            <Box w={"100%"} justifyContent={{base:"space-between",lg:"start"}} alignItems={"center"} display={'flex'}>
            <HamburgerIcon display={{base:"flex", lg:"none"}} color={"rgba(245, 110, 30, 1)"} boxSize={"40px"}/>
            <img className="Logo" src={img__icon} alt="" />
            <Box display={{base:"flex", lg:"none"}} alignItems={"center"} justifyContent={"center"} h={"50px"} w={"50px"}>
                <Search2Icon fontSize={"25px"} color={"rgba(245, 110, 30, 1)"}/>
            </Box>
            <Box h={"45px"} w={{base:"50px","2xl":"150px"}} m={"0 0 0 40px"} display={{base:"none",lg:"flex"}} alignItems={'center'} borderRadius={"15px"} justifyContent={'center'} bg={"rgba(245, 110, 30, 1)"}>
                <HamburgerIcon color={"white"} boxSize={"40px"}/>
                <Text display={{base:"none","2xl":"flex"}} p={"0 0 0 10px"} fontSize={"18px"} lineHeight={"28px"} fontWeight={"600"} color={"white"}>Каталог</Text>
            </Box>
            <Box ml={{base:"10px",xl:"60px"}} border={"1.5px solid gray"} overflow={"hidden"} display={{base:"none",lg:"flex"}} borderRadius={"10px"} w={"50%"} h={"50px"} bg={"gray.200"}>
                <Input h={"100%"} w={"90%"} p={"0 0 0 10px"} fontSize={"18px"} variant='unstyled' placeholder='Я ищу'/>
                <Button variant={"outline"} h={"100%"} w={"10%"}>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} h={"100%"} w={"10%"}>
                    <Search2Icon fontSize={"25px"} color={"gray.400"}/>
                </Box>
                </Button>
            </Box>
            <Flex display={{base:"none",lg:"flex"}} alignItems={'center'} ml={"30px"} justifyContent={"space-between"} w={"25%"}>
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                    <img className="icons" src="https://cdn.icon-icons.com/icons2/902/PNG/512/shopping-cart_icon-icons.com_69303.png" width={"30px"} alt="" />
                    <Text fontSize={"14px"} color={'gray.600'}>Корзина</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                    <img className="icons" src="https://w7.pngwing.com/pngs/860/512/png-transparent-instagram-social-media-save-instagram-instagram-save-social-media-logo-icon-thumbnail.png" width={"30px"} alt="" />
                    <Text fontSize={"14px"} color={'gray.600'}>Избранное</Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
                    <img className="icons" src="https://cdn.icon-icons.com/icons2/2442/PNG/512/profile_user_icon_148618.png" width={"30px"} alt="" />
                    <Text fontSize={"14px"} color={'gray.600'}>Профиль</Text>
                </Box>
            </Flex>
            </Box>
            <Box w={"100%"} h={"30%"} display={{base:"none",lg:"flex"}} alignItems={"center"} justifyContent={"space-between"} mt={"15px"}>
                <Box bg={"gray.300"} display={{base:"none","2xl":"flex"}} alignItems={"center"} p={"5px 8px"} fontSize={"13px"} color={"gray.500"} fontWeight={"600"} borderRadius={'50px'}>Динамично. Надежно. Доступно.</Box>
                <Box w={{base:"55%","2xl":"40%"}} display={"flex"} justifyContent={"space-between"}>
                <Select color={"rgba(110, 113, 145, 1)"} fontWeight={'700'} variant={"unstyled"} w={"130px"} placeholder='О компании'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Select color={"rgba(110, 113, 145, 1)"} fontWeight={'700'} ml={"20px"} variant={"unstyled"} w={"130px"} placeholder='Клиентам'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Text color={"rgba(110, 113, 145, 1)"} fontWeight={'700'} ml={"20px"}>Сотрудничество</Text>
                <Text color={"rgba(110, 113, 145, 1)"} fontWeight={'700'} ml={"35px"}>Контакты</Text>
                </Box>
                <Flex w={{base:"40%","2xl":"34%"}} justifyContent={"space-between"} alignItems={"center"}>
                    <Box display={"flex"} alignItems={"center"}>
                        <img className="Icon__telegram" src="https://static-00.iconduck.com/assets.00/telegram-icon-512x512-1s8w0tx0.png" width={"35px"} alt="" />
                        <img className="Icon__instagram" src="https://cdn-icons-png.flaticon.com/512/2175/2175198.png" width={"35px"} alt="" />
                    </Box>


                    <Select color={"rgba(110, 113, 145, 1)"} fontWeight={'700'} ml={"20px"} variant={"unstyled"} w={"200px"} placeholder='8 (800) 455-45-11'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>


                    <Box h={"35px"} w={{base:"50px","2xl":"175px"}} m={"0 0 0 20px"} display={"flex"} alignItems={'center'} borderRadius={"15px"} justifyContent={'center'} bg={"rgba(245, 110, 30, 1)"}>
                        <PhoneIcon color={"white"} boxSize={"18px"}/>
                        <Text display={{base:"none", "2xl":"flex"}} p={"0 0 0 10px"} fontSize={"14px"} lineHeight={"28px"} fontWeight={"600"} color={"white"}>Заказть звонок</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}