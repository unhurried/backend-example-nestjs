import { Field, InputType } from "@nestjs/graphql";
import { Category } from "../resource/todo";

@InputType()
export class TodoInput {
  @Field()
  title: string;

  @Field(type => String)
  category: Category;

  @Field({ nullable: true })
  content?: string;
}
