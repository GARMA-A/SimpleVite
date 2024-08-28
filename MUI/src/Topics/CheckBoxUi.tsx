import {Box , FormControl , FormControlLabel , FormLabel , Checkbox} from '@material-ui/core';
import { useState } from 'react';
import BookMarkIcon from '@material-ui/icons/Bookmark';
function CheckBoxUi() {
       const [pizza, setPizza] = useState(false);
       const handlePizza = (event: React.ChangeEvent<HTMLInputElement>) => { setPizza(event.target.checked) };
       console.log(pizza);
       return (
              <Box>
                     <Box>
                            <FormControl>
                                   <FormLabel>Choose your favorite food</FormLabel>
                                   <FormControlLabel
                                          control={<Checkbox checked={pizza} onChange={handlePizza} />}
                                          label="Pizza"
                                   />
                                   <FormControlLabel
                                          control={<Checkbox   />}
                                          label="Burger"
                                   />
                                   <FormControlLabel
                                          control={<Checkbox  />}
                                          label="Pasta"
                                   />
                                   <Checkbox icon={<BookMarkIcon />} checkedIcon={<BookMarkIcon />} />
                            </FormControl>
                     </Box>
                     
              </Box>
       )
}

export default CheckBoxUi
