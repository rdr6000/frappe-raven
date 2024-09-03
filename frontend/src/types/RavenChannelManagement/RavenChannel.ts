
export interface RavenChannel{
	name: string
	creation: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Channel Name : Data	*/
	channel_name: string
	/**	Channel Description : Small Text	*/
	channel_description?: string
	/**	Type : Select	*/
	type: "Private" | "Public" | "Open"
	/**	Is Synced : Check	*/
	is_synced?: 0 | 1
	/**	Linked DocType : Link - DocType	*/
	linked_doctype?: string
	/**	Linked Document : Dynamic Link	*/
	linked_document?: string
	/**	Is Direct Message : Check	*/
	is_direct_message?: 0 | 1
	/**	Is Thread : Check	*/
	is_thread?: 0 | 1
	/**	Is Self Message : Check	*/
	is_self_message?: 0 | 1
	/**	Is Archived : Check	*/
	is_archived?: 0 | 1
	/**	Last Message Timestamp : Datetime	*/
	last_message_timestamp?: string
	/**	Last Message Details : JSON	*/
	last_message_details?: any
}