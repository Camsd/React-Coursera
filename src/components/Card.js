import { Heading, HStack, Image, propNames, Text, VStack, Box, Flex} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc }) => {
return <VStack>
  
          <Box  display='flex' bg={"white"} borderRadius='lg' overflow='hidden' borderColor='black'>
           <VStack spacing={2}><Image src={imageSrc}></Image>
           <Heading color='black' fontSize='2xl' fontFamily='body'>{title}</Heading>
           <Text noOfLines={2} color='blue.600'>{description}</Text>
           </VStack>
           <VStack noOfLines={1} spacing={2}>
           <Text color='black' as='b'>See more </Text>
           <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
           </VStack>
          </Box>
        </VStack>
       
};

export default Card;
