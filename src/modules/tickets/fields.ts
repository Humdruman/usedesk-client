import {dispatch} from "../../core";



type FieldTypeText = 1;
type FieldTypeList = 2;
type FieldTypeCheckbox = 3;
type FieldTypeNestedList = 4;

type BooleanNumbers = 0|1;

export type CustomFieldGeneral  = {
    id:                   string;
    company_id:           string;
    name:                 string;
    value:                null;
    required:             BooleanNumbers;
    add_tag:              BooleanNumbers;
    add_filter:           BooleanNumbers;
    sort:                 number;
    active:               BooleanNumbers;
    hidden:               BooleanNumbers;
    api:                  BooleanNumbers;
    deleted:              BooleanNumbers;
    parent_field_id:      number;
    mask:                 string;
    ticket_interface:     BooleanNumbers;
    created_at:           string|null;
    updated_at:           string|null;
}

type ListOption = {
    id:               number;
    ticket_field_id:  number;
    value:            string;
    parent_option_id: number[];
    created_at:       null;
    updated_at:       null;
    order:            number;
}

type Fields = {
    custom_field: CustomFieldGeneral & {ticket_field_type_id: FieldTypeText | FieldTypeCheckbox},
    field_options: []
}

type ListField = {
    custom_field: CustomFieldGeneral & {ticket_field_type_id: FieldTypeList | FieldTypeNestedList},
    field_options: ListOption[]
}

type FieldsResponse = (Fields|ListField)[]


export const fields = async () => {
    return await dispatch<FieldsResponse>('/ticket/fields');
}
