import React from "react"
import { Checkbox, IconButton } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"

const View = React.memo(
    ({ item, onCheck, onClickEditelementId, onClickCheckBox }) => {
        return (
            <>
                <Checkbox
                    checked={onCheck}
                    onMouseDown={event => {
                        event.stopPropagation()
                    }}
                    onClick={() => {
                        onClickCheckBox(item)
                    }}
                />
                <IconButton
                    style={{ padding: "5px" }}
                    onMouseDown={event => {
                        event.stopPropagation()
                    }}
                    onClick={() => {
                        onClickEditelementId(item.id)
                    }}
                >
                    <EditIcon fontSize='small' />
                </IconButton>
            </>
        )
    }
)

export default View
