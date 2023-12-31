import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get("search")
    search(@Query("year") searchingYear: string) {
        return `we are searching for a moive made after: ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return 'This will create a moive';
    }

    @Delete("/:id") 
    remove(@Param('id') movieId: string) {
        return `This will delete a movie with the id: ${movieId}`;
        
    }

    @Patch("/:id") 
    patch(@Param('id') movieId: string, @Body() updateData) {

        return {
            updatedMovie : movieId,
            ...updateData,
        }
    }

}
