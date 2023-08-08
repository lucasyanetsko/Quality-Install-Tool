import JSONValue from './json_value.type'
import PhotoMetadata from './photo_metadata.type'

// Code snippet from https://dev.to/ankittanna/how-to-create-a-type-for-complex-json-object-in-typescript-d81
interface Metadata {
    created_at: Date
    last_modified_at: Date
    attachments: Record<string, JSONValue>
    project_name: string
    workflow_name: string
    workflow_title: string
}
export default Metadata
